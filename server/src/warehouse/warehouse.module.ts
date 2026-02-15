import { Module } from '@nestjs/common';
import { uwarehouseController } from './presentation/controllers/warehouse.controller';
import { uwarehouseService } from './application/services/warehouse.service';

@Module({
  controllers: [uwarehouseController],
  providers: [uwarehouseService],
  exports: [uwarehouseService],
})
export class uwarehouseModule {}
