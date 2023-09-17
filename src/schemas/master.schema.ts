import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { GenderType, MasterCode, State } from 'enums/master.enum';
import { HydratedDocument, Types } from 'mongoose';
import { Skill } from './skill.schema';
import { PlatformType } from 'enums/platform.enum';
import { Status } from 'enums/common.enum';
import { Accessory } from './accessory.schema';
import { Emote } from './emote.schema';

export type MasterDocument = HydratedDocument<Master>;

@Schema({
  versionKey: false,
  timestamps: true,
})
export class Master {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: String, enum: MasterCode })
  code: MasterCode;

  @Prop({ required: false, type: String })
  slogan?: string;

  @Prop({ required: false, type: String })
  description?: string;

  @Prop({ required: true, type: Number })
  age: number;

  @Prop({ required: false, type: Number })
  gender: GenderType;

  @Prop({ required: false, type: String })
  identity: string;

  @Prop({ required: false, type: String })
  hates?: string;

  @Prop({ required: false, type: String })
  likes?: string;

  @Prop({ required: true, type: Number })
  weight: number;

  @Prop({ required: true, type: Number })
  height: number;

  @Prop({ required: false, type: [{ type: Types.ObjectId, ref: Skill.name }] })
  skills?: Skill[];

  @Prop({
    required: false,
    type: [{ type: Types.ObjectId, ref: Accessory.name }],
  })
  outfits?: Accessory[];

  @Prop({ required: false, type: [{ type: Types.ObjectId, ref: Emote.name }] })
  emotes?: Emote[];

  @Prop({ required: false, type: Number, enum: PlatformType })
  platform?: PlatformType;

  @Prop({ required: true, type: Number, enum: Status, default: Status.Active })
  status: Status;

  @Prop({ required: true, type: Boolean, default: false })
  isDeleted: boolean;

  @Prop({ required: true, type: String })
  createdBy: string;

  @Prop({ required: true, type: String })
  updatedBy: string;
}

export const MasterSchema = SchemaFactory.createForClass(Master);
