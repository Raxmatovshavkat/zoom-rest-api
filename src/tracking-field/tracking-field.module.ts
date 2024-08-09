import { Module } from '@nestjs/common';
import { TrackingFieldService } from './tracking-field.service';
import { TrackingFieldController } from './tracking-field.controller';

@Module({
  controllers: [TrackingFieldController],
  providers: [TrackingFieldService],
})
export class TrackingFieldModule {}
