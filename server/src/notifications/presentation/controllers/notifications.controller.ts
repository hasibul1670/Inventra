import { Controller, Get } from '@nestjs/common';
import { unotificationsService } from '../../application/services/notifications.service';

@Controller('notifications')
export class unotificationsController {
  constructor(private readonly notificationsService: unotificationsService) {}

  @Get('health')
  health() {
    return this.notificationsService.health();
  }
}
