import { ConnectionModule } from './../../../common/connections/connections.module';
import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  imports: [ConnectionModule],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
