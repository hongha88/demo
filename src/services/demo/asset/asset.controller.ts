import { DemoController } from '@helpers/decorator.helper';
import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AssetService } from './asset.service';
import { Request } from 'express';

@DemoController('asset')
export class AssetController {
  constructor(private readonly assetService: AssetService) {}

  @Get()
  async getAssets(@Req() req: Request) {
    return;
  }

  @Post('equip')
  async equipAsset(@Req() req: Request, @Body() body) {
    return;
  }
}
