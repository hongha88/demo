import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import configs from '@configs';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: configs.ENV.MYSQL_DB_HOST,
      port: configs.ENV.MYSQL_DB_PORT,
      username: configs.ENV.MYSQL_DB_USER,
      password: configs.ENV.MYSQL_DB_PASS,
      database: configs.ENV.MYSQL_DB_NAME,
      synchronize: false,
      logging: configs.ENV.NODE_ENV == 'production' ? true : false,
      timezone: 'Z',
      charset: 'utf8mb4',
      supportBigNumbers: true,
    }),
    MongooseModule.forRoot(configs.ENV.MONGO_URL),
    EventEmitterModule.forRoot(),
  ],
  providers: [],
  exports: [TypeOrmModule, MongooseModule],
})
export class ConnectionModule {}
