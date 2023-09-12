import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId } from 'class-validator';

export class SkillIdParam {
  @ApiProperty({ required: true })
  @IsMongoId()
  skillId: string;
}
