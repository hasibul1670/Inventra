import { Controller, Get } from '@nestjs/common';
import { ucatalogService } from '../../application/services/catalog.service';

@Controller('catalog')
export class ucatalogController {
  constructor(private readonly catalogService: ucatalogService) {}

  @Get('health')
  health() {
    return this.catalogService.health();
  }
}
