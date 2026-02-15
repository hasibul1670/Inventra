import { Module } from '@nestjs/common';
import { uintegrationsController } from './presentation/controllers/integrations.controller';
import { uintegrationsService } from './application/services/integrations.service';

@Module({
  controllers: [uintegrationsController],
  providers: [uintegrationsService],
  exports: [uintegrationsService],
})
export class uintegrationsModule {}
