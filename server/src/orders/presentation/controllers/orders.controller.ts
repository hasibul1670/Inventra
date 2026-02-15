import { Controller, Get } from '@nestjs/common';
import { uordersService } from '../../application/services/orders.service';

@Controller('orders')
export class uordersController {
  constructor(private readonly ordersService: uordersService) {}

  @Get('health')
  health() {
    return this.ordersService.health();
  }
}
