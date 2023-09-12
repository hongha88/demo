import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { GenderType, MasterType, State } from 'enums/master.enum';
import { HydratedDocument, Types } from 'mongoose';
import { Skill } from './skill.schema';

export type MasterDocument = HydratedDocument<Master>;

@Schema({
  versionKey: false,
  timestamps: true,
})
export class Master {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: String, enum: MasterType })
  type: MasterType;

  @Prop({ required: false, type: String })
  slogan?: string;

  @Prop({ required: false, type: String })
  description?: string;

  @Prop({ required: true, type: Number })
  age: number;

  @Prop({ required: false, type: Number })
  gender: GenderType;

  @Prop({ required: false, type: [String] })
  hates?: string[];

  @Prop({ required: false, type: [String] })
  likes?: string[];

  @Prop({ required: true, type: Number })
  weight: number;

  @Prop({ required: true, type: Number })
  height: number;

  @Prop({ required: true, type: Number, default: 0 })
  hp: number;

  @Prop({ required: true, type: Number, default: 0 })
  mana: number;

  @Prop({ required: true, type: Number, default: 0 })
  recoverMana: number;

  @Prop({ required: true, type: Number, default: 0 })
  specialEnergy: number;

  @Prop({ required: true, type: Number, default: 0 })
  specialEnergyTakeDamage: number;

  @Prop({ required: true, type: Number, default: 0 })
  specialEnergyDealDamage: number;

  @Prop({ required: true, type: Number, enum: State })
  state: State;

  @Prop({ required: false, type: [{ type: Types.ObjectId, ref: Skill.name }] })
  skills?: Skill[];

  @Prop({ required: true, type: Boolean, default: false })
  isDeleted: boolean;

  @Prop({ required: true, type: String })
  createdBy: string;

  @Prop({ required: true, type: String })
  updatedBy: string;
}

export const MasterSchema = SchemaFactory.createForClass(Master);
