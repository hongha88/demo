import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  AvatarPlayer,
  AvatarPlayerDocument,
} from 'schemas/avatarPlayer.schema';
import { Master, MasterDocument } from 'schemas/master.schema';
import { Skill, SkillDocument } from 'schemas/skill.schema';
import { User, UserDocument } from 'schemas/user.schema';

@Injectable()
export class InitializationsService implements OnModuleInit {
  private readonly logger: Logger = new Logger(InitializationsService.name);

  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
    @InjectModel(Master.name)
    private readonly masterModel: Model<MasterDocument>,
    @InjectModel(AvatarPlayer.name)
    private readonly avatarPlayerModel: Model<AvatarPlayerDocument>,
    @InjectModel(Skill.name)
    private readonly skilModel: Model<SkillDocument>,
  ) {}
  async onModuleInit() {
    // throw new Error('Method not implemented.');
  }
}
