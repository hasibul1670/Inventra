import { Module } from '@nestjs/common';
import { IdentityModule } from './identity/identity.module';
import { InventoryModule } from './inventory/inventory.module';
import { CatalogModule } from './catalog/catalog.module';
import { WarehouseModule } from './warehouse/warehouse.module';
import { OrdersModule } from './orders/orders.module';
import { BillingModule } from './billing/billing.module';
import { NotificationsModule } from './notifications/notifications.module';
import { AuditModule } from './audit/audit.module';
import { IntegrationsModule } from './integrations/integrations.module';

@Module({
  imports: [
    IdentityModule,
    InventoryModule,
    CatalogModule,
    WarehouseModule,
    OrdersModule,
    BillingModule,
    NotificationsModule,
    AuditModule,
    IntegrationsModule,
  ],
})
export class AppModule {}
