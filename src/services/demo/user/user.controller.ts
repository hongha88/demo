import { DemoController } from '@helpers/decorator.helper';
import { Body, Controller, Get, Post, Put, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';
import { CreateAvatarPlayerRequest } from './requests/createAvatarPlayer.request';

@DemoController('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('avatar-player')
  async createAvatarPlayer(
    @Req() req: Request,
    @Body() body: CreateAvatarPlayerRequest,
  ) {
    return await this.userService.createAvatarPlayer(req.userId, body);
  }

  @Put('avatar-player')
  async updateAvatarPlayer(
    @Req() req: Request,
    @Body() body: CreateAvatarPlayerRequest,
  ) {
    return await this.userService.updateAvatarPlayer(req.userId, body);
  }

  @Get('avatar-player')
  async getAvatarPlayer(@Req() req: Request) {
    return await this.userService.getAvatarPlayer(req.userId);
  }
}
