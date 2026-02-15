import { Module } from '@nestjs/common';
import { ucatalogController } from './presentation/controllers/catalog.controller';
import { ucatalogService } from './application/services/catalog.service';

@Module({
  controllers: [ucatalogController],
  providers: [ucatalogService],
  exports: [ucatalogService],
})
export class ucatalogModule {}
