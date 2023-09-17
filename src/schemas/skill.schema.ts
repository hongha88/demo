import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SkillType } from 'enums/skill.enum';
import { HydratedDocument, Types } from 'mongoose';

export type SkillDocument = HydratedDocument<Skill>;

@Schema({
  versionKey: false,
  timestamps: true,
})
export class Skill {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: String, unique: true })
  code: string;

  @Prop({ required: false, type: String })
  description?: string;

  @Prop({ required: true, type: Number, enum: SkillType })
  type: SkillType; // TODO: update type

  @Prop({ required: true, type: Types.ObjectId })
  masterId: Types.ObjectId;

  @Prop({ required: true, type: String })
  command: string;

  @Prop({ required: true, type: Number, default: 0 })
  damage: number;

  @Prop({ required: true, type: Number, default: 0 })
  lostMana: number;

  @Prop({ required: true, type: Number, default: 0 })
  lostSpecialEnergy: number;

  @Prop({ required: true, type: Boolean, default: false })
  blockByDefense: boolean; // can be blocked by opponents

  @Prop({ required: true, type: Number, default: 0 })
  percentDecreaseAttackDamage: number;

  @Prop({ required: true, type: Boolean, default: false })
  isDeleted: boolean;

  @Prop({ required: true, type: String })
  createdBy: string;

  @Prop({ required: true, type: String })
  updatedBy: string;
}

export const SkillSchema = SchemaFactory.createForClass(Skill);
