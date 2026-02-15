import { Controller, Get } from '@nestjs/common';
import { ubillingService } from '../../application/services/billing.service';

@Controller('billing')
export class ubillingController {
  constructor(private readonly billingService: ubillingService) {}

  @Get('health')
  health() {
    return this.billingService.health();
  }
}
