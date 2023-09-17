import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { AvatarPlayer, AvatarPlayerDocument } from './avatarPlayer.schema';

export type UserDocument = HydratedDocument<User>;

@Schema({
  _id: false,
  autoIndex: false,
  versionKey: false,
  timestamps: true,
})
export class User {
  @Prop({
    required: true,
    type: String,
    unique: true,
    _id: true,
    index: true,
    alias: 'userId',
  })
  _id: string;

  @Prop({ required: false, type: String })
  displayName?: string;

  @Prop({ required: false, type: String })
  email?: string;

  @Prop({ required: false, type: Boolean })
  isLocked?: boolean;

  @Prop({ required: true, type: Number, default: 0 })
  elo: number;

  @Prop({
    required: false,
    type: Types.ObjectId,
    ref: AvatarPlayer.name,
  })
  avatarPlayer?: Types.ObjectId | Partial<AvatarPlayerDocument>;

  @Prop({ required: false, type: Boolean })
  isDeleted?: boolean; // only delete in game
}

export const UserSchema = SchemaFactory.createForClass(User);
