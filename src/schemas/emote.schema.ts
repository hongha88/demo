import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { EmoteType } from 'enums/emote.enum';
import { HydratedDocument, Types } from 'mongoose';

export type EmoteDocument = HydratedDocument<Emote>;

@Schema({
  versionKey: false,
  timestamps: true,
})
export class Emote {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: String, unique: true })
  code: string;

  @Prop({ required: false, type: String })
  description?: string;

  @Prop({ required: true, type: Number, enum: EmoteType })
  type: EmoteType;

  @Prop({ required: false, type: Types.ObjectId })
  masterId?: Types.ObjectId;

  @Prop({ required: false, type: String })
  image?: string;

  @Prop({ required: false, type: String })
  mediaUrl?: string;

  @Prop({ required: false, type: Number, default: 0 })
  price?: number;

  @Prop({ required: true, type: Boolean, default: false })
  isDeleted: boolean;

  @Prop({ required: true, type: String })
  createdBy: string;

  @Prop({ required: true, type: String })
  updatedBy: string;
}

export const EmoteSchema = SchemaFactory.createForClass(Emote);
