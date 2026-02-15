import { Module } from '@nestjs/common';
import { uordersController } from './presentation/controllers/orders.controller';
import { uordersService } from './application/services/orders.service';

@Module({
  controllers: [uordersController],
  providers: [uordersService],
  exports: [uordersService],
})
export class uordersModule {}
