import { Module } from '@nestjs/common';
import { ServicesController } from './services.controller';
import { CommonController } from './common/common.controller';
import { CommonModule } from './common/common.module';
import { DemoModule } from './demo/demo.module';
import { HealthModule } from './health/health.module';

@Module({
  controllers: [ServicesController, CommonController],
  imports: [CommonModule, DemoModule, HealthModule]
})
export class ServicesModule {}
