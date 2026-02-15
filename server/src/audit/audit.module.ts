import { Module } from '@nestjs/common';
import { uauditController } from './presentation/controllers/audit.controller';
import { uauditService } from './application/services/audit.service';

@Module({
  controllers: [uauditController],
  providers: [uauditService],
  exports: [uauditService],
})
export class uauditModule {}
