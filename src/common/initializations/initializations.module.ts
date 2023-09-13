import { Module } from '@nestjs/common';
import { InitializationsService } from './initializations.service';
import { ConnectionModule } from '@connections/connections.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AvatarPlayer, AvatarPlayerSchema } from 'schemas/avatarPlayer.schema';
import { Master, MasterSchema } from 'schemas/master.schema';
import { Skill, SkillSchema } from 'schemas/skill.schema';
import { User, UserSchema } from 'schemas/user.schema';

@Module({
  imports: [
    ConnectionModule,
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: AvatarPlayer.name, schema: AvatarPlayerSchema },
      { name: Master.name, schema: MasterSchema },
      { name: Skill.name, schema: SkillSchema },
    ]),
  ],
  providers: [InitializationsService],
})
export class InitializationsModule {}
