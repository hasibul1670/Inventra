import { Controller, Get } from '@nestjs/common';
import { uintegrationsService } from '../../application/services/integrations.service';

@Controller('integrations')
export class uintegrationsController {
  constructor(private readonly integrationsService: uintegrationsService) {}

  @Get('health')
  health() {
    return this.integrationsService.health();
  }
}
