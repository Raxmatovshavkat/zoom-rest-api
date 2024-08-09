import { Module } from '@nestjs/common';
import { TspService } from './tsp.service';
import { TspController } from './tsp.controller';

@Module({
  controllers: [TspController],
  providers: [TspService],
})
export class TspModule {}
