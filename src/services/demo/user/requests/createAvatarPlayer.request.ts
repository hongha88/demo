import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { AvatarPlayerType } from 'enums/avatarPlayer.enum';
import { AvatarPlayer } from 'schemas/avatarPlayer.schema';

export class CreateAvatarPlayerRequest
  implements
    Omit<
      AvatarPlayer,
      | 'skillIds'
      | 'masterIds'
      | 'userId'
      | 'exp'
      | 'speed'
      | 'defense'
      | 'damage'
    >
{
  @ApiProperty({ required: true, enum: AvatarPlayerType })
  @IsEnum(AvatarPlayerType)
  type: AvatarPlayerType;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  name: string;
}
