import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MasterPrismaService } from './prisma/master-prisma.service';
import { ProductsModule } from './products/products.module';
import { TenantResolverMiddleware } from './tenancy/tenant-resolver.middleware';
import { TenancyModule } from './tenancy/tenancy.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), TenancyModule, ProductsModule],
  providers: [MasterPrismaService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TenantResolverMiddleware).forRoutes('*');
  }
}
