import { MasterType, GenderType, State } from 'enums/master.enum';
import { Types } from 'mongoose';
import { Master, MasterDocument } from 'schemas/master.schema';
import { Skill } from 'schemas/skill.schema';
import { Exclude, Expose } from 'class-transformer';

export class MasterDto implements Master {
  @Exclude()
  _id: Types.ObjectId;
  name: string;
  type: MasterType;
  slogan?: string;
  description?: string;
  age: number;
  gender: GenderType;
  hates?: string[];
  likes?: string[];
  weight: number;
  height: number;
  hp: number;
  mana: number;
  recoverMana: number;
  specialEnergy: number;
  specialEnergyTakeDamage: number;
  specialEnergyDealDamage: number;
  state: State;
  skills?: Skill[];
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
