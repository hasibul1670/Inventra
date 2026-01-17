import { Injectable } from '@nestjs/common';
import { AsyncLocalStorage } from 'async_hooks';
import { PrismaClient as TenantPrismaClient } from '../prisma/generated/tenant';

export interface TenantContext {
  tenantId: string;
  tenantSlug: string;
  tenantDbUrl: string;
  prisma: TenantPrismaClient;
}

@Injectable()
export class TenantContextService {
  private readonly storage = new AsyncLocalStorage<TenantContext>();

  run(context: TenantContext, callback: () => void) {
    this.storage.run(context, callback);
  }

  getContext(): TenantContext {
    const context = this.storage.getStore();
    if (!context) {
      throw new Error('Tenant context not initialized');
    }
    return context;
  }
}
