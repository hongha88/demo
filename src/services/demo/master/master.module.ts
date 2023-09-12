import { Module } from '@nestjs/common';
import { MasterController } from './master.controller';
import { MasterService } from './master.service';
import { ConnectionModule } from '@connections/connections.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Master, MasterSchema } from 'schemas/master.schema';
import { Skill, SkillSchema } from 'schemas/skill.schema';

@Module({
  imports: [
    ConnectionModule,
    MongooseModule.forFeature([
      { name: Master.name, schema: MasterSchema },
      { name: Skill.name, schema: SkillSchema },
    ]),
  ],
  controllers: [MasterController],
  providers: [MasterService]
})
export class MasterModule {}
