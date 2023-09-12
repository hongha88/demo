import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TemplateDocument = HydratedDocument<Template>;

@Schema({
  versionKey: false,
  timestamps: true,
})
export class Template {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: String })
  createdBy: string;

  @Prop({ required: true, type: String })
  updatedBy: string;
}

export const TemplateSchema = SchemaFactory.createForClass(Template);
