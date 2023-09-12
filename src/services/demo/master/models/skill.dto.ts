import { Exclude } from 'class-transformer';
import { SkillType } from 'enums/skill.enum';
import { Types } from 'mongoose';
import { Skill, SkillDocument } from 'schemas/skill.schema';

export class SkillDto implements Skill {
  @Exclude()
  _id: Types.ObjectId;
  name: string;
  code: string;
  description?: string;
  type: SkillType;
  @Exclude()
  masterId: Types.ObjectId;
  command: string;
  defense: number;
  damage: number;
  lostMana: number;
  lostSpecialEnergy: number;
  isBlock: boolean;
  @Exclude()
  isDeleted: boolean;
  @Exclude()
  createdBy: string;
  @Exclude()
  updatedBy: string;

  constructor(partial: Partial<SkillDocument>) {
    Object.assign(this, partial);
  }
}
