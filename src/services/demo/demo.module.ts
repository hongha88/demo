import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MasterModule } from './master/master.module';
import { AssetModule } from './asset/asset.module';

@Module({
  imports: [UserModule, MasterModule, AssetModule],
})
export class DemoModule {}
