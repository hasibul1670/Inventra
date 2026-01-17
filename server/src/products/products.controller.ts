import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async listProducts() {
    return this.productsService.listProducts();
  }

  @Post()
  async createProduct(@Body() dto: CreateProductDto) {
    return this.productsService.createProduct(dto);
  }
}
