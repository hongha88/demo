import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    async getProducts() {
        return 'list of products';
    }
}
