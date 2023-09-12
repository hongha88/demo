import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { MasterType, GenderType } from 'enums/master.enum';
import { Master } from 'schemas/master.schema';
import { Skill } from 'schemas/skill.schema';

export class CreateMasterRequest
  implements
    Omit<Master, 'createdBy' | 'updatedBy' | 'isDeleted' | 'state' | 'skills'>
{
  @ApiProperty({ required: true })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: true, enum: MasterType })
  @IsEnum(MasterType)
  type: MasterType;

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
  @IsArray()
  @IsOptional()
  hates?: string[];

  @ApiProperty({ required: false })
  @IsArray()
  @IsOptional()
  likes?: string[];

  @ApiProperty({ required: true })
  @IsPositive()
  weight: number;

  @ApiProperty({ required: true })
  @IsPositive()
  height: number;

  @ApiProperty({ required: true })
  @IsPositive()
  hp: number;

  @ApiProperty({ required: true })
  @IsNumber()
  mana: number;

  @ApiProperty({ required: true })
  @IsNumber()
  recoverMana: number;

  @ApiProperty({ required: true })
  @IsNumber()
  specialEnergy: number;

  @ApiProperty({ required: true })
  @IsNumber()
  specialEnergyTakeDamage: number;

  @ApiProperty({ required: true })
  @IsNumber()
  specialEnergyDealDamage: number;
}
