import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Accessory, AccessoryDocument } from 'schemas/accessory.schema';
import {
  AvatarPlayer,
  AvatarPlayerDocument,
} from 'schemas/avatarPlayer.schema';
import { Emote, EmoteDocument } from 'schemas/emote.schema';
import { Master, MasterDocument } from 'schemas/master.schema';
import { Skill, SkillDocument } from 'schemas/skill.schema';
import { User, UserDocument } from 'schemas/user.schema';
import { initGameConfig } from './gameConfig.init';
import { GameConfig, GameConfigDocument } from 'schemas/gameConfig.schema';
import { initMaster } from './master.init';

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
    private readonly skillModel: Model<SkillDocument>,
    @InjectModel(Accessory.name)
    private readonly accessoryModel: Model<AccessoryDocument>,
    @InjectModel(Emote.name)
    private readonly emoteModel: Model<EmoteDocument>,
    @InjectModel(GameConfig.name)
    private readonly gameConfigModel: Model<GameConfigDocument>,
  ) {}
  async onModuleInit() {
    // throw new Error('Method not implemented.');
    await initGameConfig(this.gameConfigModel);
    await initMaster(
      this.masterModel,
      this.skillModel,
      this.accessoryModel,
      this.emoteModel,
    );

    this.logger.log('Initializations success!');
  }
}
