import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { ServicesModule } from './services/services.module';
import { ConnectionModule } from '@connections/connections.module';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: 1,
      limit: 3,
    }),
    ServicesModule,
    ConnectionModule,
  ],
  providers: [{ provide: APP_GUARD, useClass: ThrottlerGuard }],
})
export class MainModule {}
