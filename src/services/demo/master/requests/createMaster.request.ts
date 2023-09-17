import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
} from 'class-validator';
import { GenderType, MasterCode, VoiceType } from 'enums/master.enum';
import { Master } from 'schemas/master.schema';

export class CreateMasterRequest
  implements
    Omit<
      Master,
      | 'outfits'
      | 'emotes'
      | 'skills'
      | 'platform'
      | 'status'
      | 'isDeleted'
      | 'createdBy'
      | 'updatedBy'
    >
{
  @ApiProperty({ required: true })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: true, enum: MasterCode })
  @IsEnum(MasterCode)
  code: MasterCode;

  @ApiProperty({ required: false })
  @IsOptional()
  slogan?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  description?: string;

  @ApiProperty({ required: true })
  @IsPositive()
  age: number;

  @ApiProperty({ required: true, enum: GenderType })
  @IsEnum(GenderType)
  gender: GenderType;

  @ApiProperty({ required: false })
  @IsNotEmpty()
  identity: string;

  @ApiProperty({ required: false })
  @IsOptional()
  hates?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  likes?: string;

  @ApiProperty({ required: true })
  @IsPositive()
  weight: number;

  @ApiProperty({ required: true })
  @IsPositive()
  height: number;

  @ApiProperty({ required: true })
  @IsEnum(VoiceType)
  voice: VoiceType;
}
