import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Master, MasterDocument } from 'schemas/master.schema';
import { Skill, SkillDocument } from 'schemas/skill.schema';
import { CreateMasterRequest } from './requests/createMaster.request';

@Injectable()
export class MasterService {
  constructor(
    @InjectModel(Master.name)
    private readonly masterModel: Model<MasterDocument>,
    @InjectModel(Skill.name)
    private readonly skillModel: Model<SkillDocument>,
  ) {}

  async getMasters() {

    return;
  }

  async getMasterDetail(masterId: string) {
    return;
  }

  async createMaster(userId: string, body: CreateMasterRequest) {
    
  }

  async updateMaster() {

  }

  async deleteMaster() {

  }

  async createSkillMaster(masterId: string) {
    return;
  }

  async updateSkillMaster(masterId: string) {

  }
}
