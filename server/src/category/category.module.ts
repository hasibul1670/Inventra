import { Module } from '@nestjs/common';
import { CategoryController } from './presentation/controllers/category.controller';
import { CategoryService } from './application/services/category.service';
import { MasterPrismaService } from '../infrastructure/prisma/master-prisma.service';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService, MasterPrismaService],
  exports: [CategoryService],
})
export class CategoryModule {}
