import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AccessoryType } from 'enums/accessory.enum';
import { HydratedDocument, Types } from 'mongoose';

export type AccessoryDocument = HydratedDocument<Accessory>;

export type Color = {
  code: string;
  name: string;
  image?: string;
  mediaUrl?: string;
};

@Schema({
  versionKey: false,
  timestamps: true,
})
export class Accessory {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: String, unique: true })
  code: string;

  @Prop({ required: false, type: String })
  description?: string;

  @Prop({ required: true, type: String, enum: AccessoryType })
  type: AccessoryType;

  @Prop({ required: false, type: Types.ObjectId })
  masterId?: Types.ObjectId;

  @Prop({ required: true, type: [Object] })
  colors: Color[];

  @Prop({ required: true, type: Boolean, default: false })
  isDeleted: boolean;

  @Prop({ required: true, type: String })
  createdBy: string;

  @Prop({ required: true, type: String })
  updatedBy: string;
}

export const AccessorySchema = SchemaFactory.createForClass(Accessory);
