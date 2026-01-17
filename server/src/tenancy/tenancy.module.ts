import { Module } from '@nestjs/common';
import { TenantContextService } from './tenant-context.service';
import { TenantPrismaManager } from './tenant-prisma.manager';
import { TenantResolverMiddleware } from './tenant-resolver.middleware';

@Module({
  providers: [TenantContextService, TenantPrismaManager, TenantResolverMiddleware],
  exports: [TenantContextService, TenantPrismaManager],
})
export class TenancyModule {}
