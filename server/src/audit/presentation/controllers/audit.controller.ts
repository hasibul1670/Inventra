import { Controller, Get } from '@nestjs/common';
import { uauditService } from '../../application/services/audit.service';

@Controller('audit')
export class uauditController {
  constructor(private readonly auditService: uauditService) {}

  @Get('health')
  health() {
    return this.auditService.health();
  }
}
