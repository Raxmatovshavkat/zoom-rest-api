import { Module } from '@nestjs/common';
import { WebinarsService } from './webinars.service';
import { WebinarsController } from './webinars.controller';

@Module({
  controllers: [WebinarsController],
  providers: [WebinarsService],
})
export class WebinarsModule {}
