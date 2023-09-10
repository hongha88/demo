import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsServices: ProductsService) {}
  @Get()
  async getProducts() {
    return this.productsServices.getProducts();
  }
}
