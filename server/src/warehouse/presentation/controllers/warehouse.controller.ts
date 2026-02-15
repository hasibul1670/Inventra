import { Controller, Get } from '@nestjs/common';
import { uwarehouseService } from '../../application/services/warehouse.service';

@Controller('warehouse')
export class uwarehouseController {
  constructor(private readonly warehouseService: uwarehouseService) {}

  @Get('health')
  health() {
    return this.warehouseService.health();
  }
}
