import { Body, Controller, Get, Param, Post, Put, Req } from '@nestjs/common';
import { MasterService } from './master.service';
import { Request } from 'express';
import { MasterIdParam } from './params/masterId.param';
import { CreateMasterRequest } from './requests/createMaster.request';
import { DemoController } from '@helpers/decorator.helper';
import { SkillIdParam } from './params/skillId.param';
import { CreateSkillRequest } from './requests/createSkill.request';

@DemoController('masters')
export class MasterController {
  constructor(private readonly masterService: MasterService) {}

  @Get()
  async getMasters() {
    return await this.masterService.getMasters();
  }

  @Get(':masterId')
  async getDetailMaster(@Param() { masterId }: MasterIdParam) {
    return await this.masterService.getDetailMaster(masterId);
  }

  @Post()
  async createMaster(@Req() req: Request, @Body() body: CreateMasterRequest) {
    return await this.masterService.createMaster(req.userId, body);
  }

  @Put(':masterId')
  async updateMaster(
    @Req() req: Request,
    @Param() { masterId }: MasterIdParam,
    @Body() body: CreateMasterRequest,
  ) {
    return await this.masterService.updateMaster(req.userId, masterId, body);
  }

  @Put(':masterId/delete')
  async deleteMaster(
    @Req() req: Request,
    @Param() { masterId }: MasterIdParam,
  ) {
    return await this.masterService.deleteMaster(req.userId, masterId);
  }

  @Get(':masterId/skills')
  async getSkillsMaster(@Param() { masterId }: MasterIdParam) {
    return await this.masterService.getSkillMaster(masterId);
  }

  @Get(':masterId/skills/:skillId')
  async getDetailSkillMaster(
    @Param() { masterId }: MasterIdParam,
    @Param() { skillId }: SkillIdParam,
  ) {
    return await this.masterService.getDetailSkillMaster(masterId, skillId);
  }

  @Post(':masterId/skills')
  async createSkillMaster(
    @Req() req: Request,
    @Param() { masterId }: MasterIdParam,
    @Body() body: CreateSkillRequest,
  ) {
    return await this.masterService.createSkillMaster(
      req.userId,
      masterId,
      body,
    );
  }

  @Put(':masterId/skills/:skillId')
  async updateSkillMaster(
    @Req() req: Request,
    @Param() { masterId }: MasterIdParam,
    @Param() { skillId }: SkillIdParam,
    @Body() body: CreateSkillRequest,
  ) {
    return await this.masterService.updateSkillMaster(
      req.userId,
      masterId,
      skillId,
      body,
    );
  }

  @Put(':masterId/skills/:skillId/delete')
  async deleteSkillMaster(
    @Req() req: Request,
    @Param() { masterId }: MasterIdParam,
    @Param() { skillId }: SkillIdParam,
  ) {
    return await this.masterService.deleteSkillMaster(
      req.userId,
      masterId,
      skillId,
    );
  }
}
