import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AccessoryType } from 'enums/accessory.enum';
import { Category } from 'enums/category.enum';
import { EmoteType } from 'enums/emote.enum';
import { HydratedDocument } from 'mongoose';

export type AssetDocument = HydratedDocument<Asset>;

@Schema({
  _id: false,
  autoIndex: false,
  versionKey: false,
  timestamps: true,
})
export class Asset {
  @Prop({
    required: true,
    type: String,
    unique: true,
    _id: true,
    index: true,
  })
  _id: string;

  @Prop({ required: true, type: String })
  owner: string;

  @Prop({ required: true, type: String })
  userId: string;

  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: false, type: String })
  description: string;

  @Prop({ required: true, type: String, enum: Category })
  category: Category;

  @Prop({ required: false, type: Number })
  defense: number;

  @Prop({ required: false, type: Number })
  damage: number;

  @Prop({ required: false, type: String })
  image: string;

  @Prop({ required: false, type: String })
  color: string;

  @Prop({ required: false, type: Object })
  attributes: any;

  @Prop({ required: true, type: String, enum: AccessoryType || EmoteType })
  type: AccessoryType | EmoteType;

  @Prop({ required: false, type: String })
  code: string; 

  @Prop({ required: false, type: Boolean })
  isEquipped: boolean;

  @Prop({ required: true, type: Boolean, default: false })
  isWithdraw: boolean;
}

export const AssetSchema = SchemaFactory.createForClass(Asset);
