import { Module } from '@nestjs/common';
import { SipphoneService } from './sipphone.service';
import { SipphoneController } from './sipphone.controller';

@Module({
  controllers: [SipphoneController],
  providers: [SipphoneService],
})
export class SipphoneModule {}
