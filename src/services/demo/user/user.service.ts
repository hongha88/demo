import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  AvatarPlayer,
  AvatarPlayerDocument,
} from 'schemas/avatarPlayer.schema';
import { CreateAvatarPlayerRequest } from './requests/createAvatarPlayer.request';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(AvatarPlayer.name)
    private readonly avatarPlayer: Model<AvatarPlayerDocument>,
  ) {}

  async createAvatarPlayer(userId: string, body: CreateAvatarPlayerRequest) {
    return;
  }

  async updateAvatarPlayer(userId: string, body: CreateAvatarPlayerRequest) {
    return;
  }

  async getAvatarPlayer(userId: string) {
    return;
  }
}
