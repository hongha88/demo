import { Exclude, Expose } from 'class-transformer';
import { Types } from 'mongoose';
import { AvatarPlayerDocument } from 'schemas/avatarPlayer.schema';
import { User } from 'schemas/user.schema';

export class UserDto implements User {
  @Expose({ name: 'userId' })
  _id: string;
  displayName?: string;
  email?: string;
  @Exclude()
  isLocked?: boolean;
  elo: number;
  avatarPlayer?: Types.ObjectId | Partial<AvatarPlayerDocument>;
  @Exclude()
  isDeleted?: boolean;

  constructor(partial: Partial<AvatarPlayerDocument>) {
    Object.assign(this, partial);
  }
}
