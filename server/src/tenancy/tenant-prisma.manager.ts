import { Injectable, Logger, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient as TenantPrismaClient } from '../prisma/generated/tenant';

interface TenantClientEntry {
  client: TenantPrismaClient;
  lastUsedAt: number;
}

@Injectable()
export class TenantPrismaManager implements OnModuleDestroy {
  private readonly logger = new Logger(TenantPrismaManager.name);
  private readonly clients = new Map<string, TenantClientEntry>();
  private readonly inFlight = new Map<string, Promise<TenantPrismaClient>>();
  private readonly ttlMs = 30 * 60 * 1000;

  async getClient(dbUrl: string): Promise<TenantPrismaClient> {
    const now = Date.now();
    this.evictExpired(now);

    const existing = this.clients.get(dbUrl);
    if (existing) {
      existing.lastUsedAt = now;
      return existing.client;
    }

    const inflight = this.inFlight.get(dbUrl);
    if (inflight) {
      return inflight;
    }

    const creating = this.createClient(dbUrl, now);
    this.inFlight.set(dbUrl, creating);

    try {
      const client = await creating;
      return client;
    } finally {
      this.inFlight.delete(dbUrl);
    }
  }

  private async createClient(dbUrl: string, now: number): Promise<TenantPrismaClient> {
    const client = new TenantPrismaClient({
      datasources: {
        db: {
          url: dbUrl,
        },
      },
    });

    await client.$connect();
    this.clients.set(dbUrl, { client, lastUsedAt: now });
    return client;
  }

  private evictExpired(now: number) {
    for (const [dbUrl, entry] of this.clients.entries()) {
      if (now - entry.lastUsedAt > this.ttlMs) {
        this.logger.log(`Evicting tenant Prisma client for ${dbUrl}`);
        entry.client
          .$disconnect()
          .catch((error) =>
            this.logger.error(`Failed to disconnect Prisma client`, error),
          );
        this.clients.delete(dbUrl);
      }
    }
  }

  async onModuleDestroy() {
    for (const entry of this.clients.values()) {
      await entry.client.$disconnect();
    }
  }
}
