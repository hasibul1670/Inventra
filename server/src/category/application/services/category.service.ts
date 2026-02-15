import { Injectable, NotFoundException } from '@nestjs/common';
import { MasterPrismaService } from '../../../infrastructure/prisma/master-prisma.service';
import { CreateCategoryDto } from '../../presentation/dto/create-category.dto';
import { UpdateCategoryDto } from '../../presentation/dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: MasterPrismaService) {}

  createCategory(dto: CreateCategoryDto) {
    return this.prisma.category.create({
      data: {
        name: dto.name,
        description: dto.description,
        isActive: dto.isActive ?? true,
      },
    });
  }

  getCategories() {
    return this.prisma.category.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async getCategoryById(id: string) {
    const category = await this.prisma.category.findUnique({ where: { categoryId: id } });
    if (!category) throw new NotFoundException('Category not found');
    return category;
  }

  async updateCategory(id: string, dto: UpdateCategoryDto) {
    await this.getCategoryById(id);
    return this.prisma.category.update({
      where: { id },
      data: {
        name: dto.name,
        description: dto.description,
        isActive: dto.isActive,
      },
    });
  }

  async deleteCategory(id: string) {
    await this.getCategoryById(id);
    await this.prisma.category.delete({ where: { id } });
    return { message: 'Category deleted' };
  }
}
