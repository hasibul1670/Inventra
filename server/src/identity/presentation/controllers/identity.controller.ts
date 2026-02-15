import { Controller, Get } from '@nestjs/common';
import { uidentityService } from '../../application/services/identity.service';

@Controller('identity')
export class uidentityController {
  constructor(private readonly identityService: uidentityService) {}

  @Get('health')
  health() {
    return this.identityService.health();
  }
}
