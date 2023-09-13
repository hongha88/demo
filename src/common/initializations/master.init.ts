import { Model } from 'mongoose';
import { MasterDocument } from 'schemas/master.schema';
import { SkillDocument } from 'schemas/skill.schema';

export const initMaster = async (
  masterModel: Model<MasterDocument>,
  skillModel: Model<SkillDocument>,
) => {
    
};
