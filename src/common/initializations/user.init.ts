import { md5String } from '@helpers/md5.helper';
import { Model } from 'mongoose';
import { UserDocument } from 'schemas/user.schema';

export const initUser = async (userModel: Model<UserDocument>) => {
  const existed = await userModel.find().lean();
  if (existed.length) {
    return;
  }
};
