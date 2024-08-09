import { Module } from '@nestjs/common';
import { H323DevicesService } from './h323-devices.service';
import { H323DevicesController } from './h323-devices.controller';

@Module({
  controllers: [H323DevicesController],
  providers: [H323DevicesService],
})
export class H323DevicesModule {}
