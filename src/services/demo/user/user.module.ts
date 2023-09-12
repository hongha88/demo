import { ConnectionModule } from './../../../common/connections/connections.module';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'schemas/user.schema';
import { AvatarPlayer, AvatarPlayerSchema } from 'schemas/avatarPlayer.schema';

@Module({
  imports: [
    ConnectionModule,
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: AvatarPlayer.name, schema: AvatarPlayerSchema },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
