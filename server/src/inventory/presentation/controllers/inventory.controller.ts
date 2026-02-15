import { Controller, Get } from '@nestjs/common';
import { uinventoryService } from '../../application/services/inventory.service';

@Controller('inventory')
export class uinventoryController {
  constructor(private readonly inventoryService: uinventoryService) {}

  @Get('health')
  health() {
    return this.inventoryService.health();
  }
}
