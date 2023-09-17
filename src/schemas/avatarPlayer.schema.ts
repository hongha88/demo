import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AvatarPlayerType } from 'enums/avatarPlayer.enum';
import { HydratedDocument, Types } from 'mongoose';
import { Master } from './master.schema';

export type AvatarPlayerDocument = HydratedDocument<AvatarPlayer>;

@Schema({
  versionKey: false,
  timestamps: true,
})
export class AvatarPlayer {
  @Prop({ required: true, type: String })
  userId: string;

  @Prop({ required: true, type: Number, enum: AvatarPlayerType })
  type: AvatarPlayerType; // TODO: update type

  @Prop({ required: true, type: Number, default: 0 })
  exp: number;

  @Prop({ required: false, type: [String] })
  skillIds?: string[];

  @Prop({ required: false, type: [String] })
  masterIds?: string[];
}

export const AvatarPlayerSchema = SchemaFactory.createForClass(AvatarPlayer);
