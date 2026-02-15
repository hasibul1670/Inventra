import { Module } from '@nestjs/common';
import { ubillingController } from './presentation/controllers/billing.controller';
import { ubillingService } from './application/services/billing.service';

@Module({
  controllers: [ubillingController],
  providers: [ubillingService],
  exports: [ubillingService],
})
export class ubillingModule {}
