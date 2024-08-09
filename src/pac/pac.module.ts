import { Module } from '@nestjs/common';
import { PacService } from './pac.service';
import { PacController } from './pac.controller';

@Module({
  controllers: [PacController],
  providers: [PacService],
})
export class PacModule {}
