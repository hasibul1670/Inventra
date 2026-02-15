import { Module } from '@nestjs/common';
import { unotificationsController } from './presentation/controllers/notifications.controller';
import { unotificationsService } from './application/services/notifications.service';

@Module({
  controllers: [unotificationsController],
  providers: [unotificationsService],
  exports: [unotificationsService],
})
export class unotificationsModule {}
