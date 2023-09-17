import { Master, MasterDocument } from 'schemas/master.schema';
import { Exclude, Expose } from 'class-transformer';
import { Status } from 'enums/common.enum';
import { MasterCode, GenderType } from 'enums/master.enum';
import { PlatformType } from 'enums/platform.enum';
import { Skill } from 'schemas/skill.schema';
import { Types } from 'mongoose';

export class MasterDto implements Master {
  @Exclude()
  _id: Types.ObjectId;
  name: string;
  code: MasterCode;
  slogan?: string;
  description?: string;
  age: number;
  gender: GenderType;
  identity: string;
  hates?: string;
  likes?: string;
  weight: number;
  height: number;
  skills?: Skill[];
  @Exclude()
  plaform?: PlatformType;
  @Exclude()
  status: Status;
  @Exclude()
  isDeleted: boolean;
  @Exclude()
  createdBy: string;
  @Exclude()
  updatedBy: string;

  constructor(partial: Partial<MasterDocument>) {
    Object.assign(this, partial);
  }
}
