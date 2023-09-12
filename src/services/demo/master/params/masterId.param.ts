import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId } from 'class-validator';

export class MasterIdParam {
  @ApiProperty({ required: true })
  @IsMongoId()
  masterId: string;
}
