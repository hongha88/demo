import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Master, MasterDocument } from 'schemas/master.schema';
import { Skill, SkillDocument } from 'schemas/skill.schema';
import { CreateMasterRequest } from './requests/createMaster.request';
import { CreateSkillRequest } from './requests/createSkill.request';

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

  async getDetailMaster(masterId: string) {
    return;
  }

  async createMaster(userId: string, body: CreateMasterRequest) {}

  async updateMaster(
    userId: string,
    masterId: string,
    body: CreateMasterRequest,
  ) {}

  async deleteMaster(userId: string, masterId: string) {}

  async getSkillMaster(masterId: string) {}

  async getDetailSkillMaster(masterId: string, skillId: string) {}

  async createSkillMaster(
    userId: string,
    masterId: string,
    body: CreateSkillRequest,
  ) {
    return;
  }

  async updateSkillMaster(
    userId: string,
    masterId: string,
    skillId: string,
    body: CreateSkillRequest,
  ) {}

  async deleteSkillMaster(userId: string, masterId: string, skillId: string) {}
}
