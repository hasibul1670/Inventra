import {
  ForbiddenException,
  Injectable,
  NestMiddleware,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MasterPrismaService } from '../prisma/master-prisma.service';
import { TenantContextService } from './tenant-context.service';
import { TenantPrismaManager } from './tenant-prisma.manager';

@Injectable()
export class TenantResolverMiddleware implements NestMiddleware {
  constructor(
    private readonly configService: ConfigService,
    private readonly masterPrisma: MasterPrismaService,
    private readonly tenantContext: TenantContextService,
    private readonly tenantPrismaManager: TenantPrismaManager,
  ) {}

  async use(req: any, _res: any, next: () => void) {
    const hostHeader = req.headers.host ?? '';
    const host = hostHeader.split(':')[0].toLowerCase();
    const baseDomain = this.configService
      .get<string>('APP_BASE_DOMAIN')
      ?.toLowerCase();
    const defaultSlug =
      this.configService.get<string>('DEFAULT_TENANT_SLUG') ?? 'demo';

    let slug: string | null = null;

    if (!host || host.includes('localhost') || host === '127.0.0.1') {
      slug = defaultSlug;
    } else if (baseDomain && host === baseDomain) {
      slug = defaultSlug;
    } else if (baseDomain && host.endsWith(`.${baseDomain}`)) {
      const subdomain = host.slice(0, host.length - baseDomain.length - 1);
      slug = subdomain || defaultSlug;
    }

    const tenantByDomain = await this.masterPrisma.tenant.findFirst({
      where: { domain: host },
    });

    let tenant = tenantByDomain;
    if (!tenant && slug) {
      tenant = await this.masterPrisma.tenant.findFirst({
        where: { slug },
      });
    }

    if (!tenant) {
      throw new NotFoundException('Tenant not found');
    }

    if (!tenant.isActive) {
      throw new ForbiddenException('Tenant is inactive');
    }

    const tenantPrisma = await this.tenantPrismaManager.getClient(tenant.dbUrl);

    this.tenantContext.run(
      {
        tenantId: tenant.id,
        tenantSlug: tenant.slug,
        tenantDbUrl: tenant.dbUrl,
        prisma: tenantPrisma,
      },
      () => next(),
    );
  }
}
