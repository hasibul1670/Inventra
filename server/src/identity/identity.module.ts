import { Module } from '@nestjs/common';
import { uidentityController } from './presentation/controllers/identity.controller';
import { uidentityService } from './application/services/identity.service';

@Module({
  controllers: [uidentityController],
  providers: [uidentityService],
  exports: [uidentityService],
})
export class uidentityModule {}
