import { Module } from '@nestjs/common';
import { GameConfigController } from './game-config.controller';
import { GameConfigService } from './game-config.service';

@Module({
  controllers: [GameConfigController],
  providers: [GameConfigService]
})
export class GameConfigModule {}
