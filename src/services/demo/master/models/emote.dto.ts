import { EmoteType } from 'enums/emote.enum';
import { Types } from 'mongoose';
import { Emote, EmoteDocument } from 'schemas/emote.schema';

export class EmoteDto implements Emote {
  name: string;
  code: string;
  description?: string;
  type: EmoteType;
  masterId?: Types.ObjectId;
  image?: string;
  mediaUrl?: string;
  price?: number;
  isDeleted: boolean;
  createdBy: string;
  updatedBy: string;

  constructor(partial: Partial<EmoteDocument>) {
    Object.assign(this, partial);
  }
}
