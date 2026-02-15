import { Module } from '@nestjs/common';
import { uidentityModule as IdentityModule } from './identity/identity.module';
import { uinventoryModule as InventoryModule } from './inventory/inventory.module';
import { CategoryModule } from './category/category.module';
import { uwarehouseModule as WarehouseModule } from './warehouse/warehouse.module';
import { uordersModule as OrdersModule } from './orders/orders.module';
import { ubillingModule as BillingModule } from './billing/billing.module';
import { unotificationsModule as NotificationsModule } from './notifications/notifications.module';
import { uauditModule as AuditModule } from './audit/audit.module';
import { uintegrationsModule as IntegrationsModule } from './integrations/integrations.module';

@Module({
  imports: [
    IdentityModule,
    InventoryModule,
    CategoryModule,
    WarehouseModule,
    OrdersModule,
    BillingModule,
    NotificationsModule,
    AuditModule,
    IntegrationsModule,
  ],
})
export class AppModule {}
