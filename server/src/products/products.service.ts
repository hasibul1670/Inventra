import { Injectable } from '@nestjs/common';
import { TenantContextService } from '../tenancy/tenant-context.service';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly tenantContext: TenantContextService) {}

  async listProducts() {
    const { prisma } = this.tenantContext.getContext();
    return prisma.product.findMany({ orderBy: { createdAt: 'desc' } });
  }

  async createProduct(dto: CreateProductDto) {
    const { prisma, tenantId } = this.tenantContext.getContext();
    return prisma.product.create({
      data: {
        sku: dto.sku,
        name: dto.name,
        price: dto.price,
        tenantId,
      },
    });
  }
}
