import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';
import { DemoController } from '@helpers/decorator.helper';

@DemoController('products')
export class ProductsController {
  constructor(private readonly productsServices: ProductsService) {}
  @Get()
  async getProducts() {
    return this.productsServices.getProducts();
  }
}
