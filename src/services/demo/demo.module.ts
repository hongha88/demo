import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { UserModule } from './user/user.module';
import { MasterModule } from './master/master.module';

@Module({
  imports: [ProductsModule, UserModule, MasterModule]
})
export class DemoModule {}
