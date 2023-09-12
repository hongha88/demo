import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ProficientType } from 'enums/master.enum';
import { HydratedDocument } from 'mongoose';

export type GameConfigDocument = HydratedDocument<GameConfig>;

export type LevelMilestone = {
  exp: number;
  hpIncrease: number; // hp bonus when level up
};
export type LevelConfig = Record<number, LevelMilestone>;

export type ProficientMilestone = {
  proficientScore: number;
  proficientIncreaseWin: number;
  proficientIncreaseLose: number;
};
export type ProficientConfig = Record<ProficientType, ProficientMilestone>;

export type GameConfigKey = {
  damageDefault: number;
  defenseDefault: number;
  speedDefault: number;
  level: LevelConfig;
  proficient: ProficientConfig;
};

@Schema({
  versionKey: false,
  timestamps: true,
})
export class GameConfig {
  @Prop({ required: true, type: String, unique: true })
  key: string;

  @Prop({ required: true, type: Object })
  value: any;

  @Prop({ required: false, type: String })
  updatedBy: string;
}

export const GameConfigSchema = SchemaFactory.createForClass(GameConfig);
