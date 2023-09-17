import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
} from 'class-validator';
import { SkillType } from 'enums/skill.enum';
import { Skill } from 'schemas/skill.schema';

export class CreateSkillRequest
  implements
    Omit<
      Skill,
      | 'masterId'
      | 'createdBy'
      | 'updatedBy'
      | 'isDeleted'
      | 'blockByDefense'
      | 'percentDecreaseAttackDamage'
    >
{
  @ApiProperty({ required: true })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: true, enum: SkillType })
  @IsEnum(SkillType)
  type: SkillType;

  @ApiProperty({ required: false })
  @IsOptional()
  description?: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  code: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  command: string;

  @ApiProperty({ required: true })
  @IsNumber()
  damage: number;

  @ApiProperty({ required: true })
  @IsNumber()
  lostMana: number;

  @ApiProperty({ required: true })
  @IsNumber()
  lostSpecialEnergy: number;

}
