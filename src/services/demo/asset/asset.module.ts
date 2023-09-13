import { Module } from '@nestjs/common';
import { AssetController } from './asset.controller';
import { AssetService } from './asset.service';
import { ConnectionModule } from '@connections/connections.module';

@Module({
  imports: [ConnectionModule],
  controllers: [AssetController],
  providers: [AssetService],
})
export class AssetModule {}
