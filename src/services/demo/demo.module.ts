import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MasterModule } from './master/master.module';
import { AssetModule } from './asset/asset.module';
import { GameConfigModule } from './game-config/game-config.module';

@Module({
  imports: [UserModule, MasterModule, AssetModule, GameConfigModule],
})
export class DemoModule {}
