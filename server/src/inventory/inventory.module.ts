import { Module } from '@nestjs/common';
import { uinventoryController } from './presentation/controllers/inventory.controller';
import { uinventoryService } from './application/services/inventory.service';

@Module({
  controllers: [uinventoryController],
  providers: [uinventoryService],
  exports: [uinventoryService],
})
export class uinventoryModule {}
