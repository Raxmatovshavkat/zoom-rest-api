import { Module } from '@nestjs/common';
import { CloudRecordingModule } from './cloud-recording/cloud-recording.module';
import { H323DevicesModule } from './h323-devices/h323-devices.module';
import { MeetingsModule } from './meetings/meetings.module';
import { PacModule } from './pac/pac.module';
import { ReportsModule } from './reports/reports.module';
import { SipphoneModule } from './sipphone/sipphone.module';
import { TrackingFieldModule } from './tracking-field/tracking-field.module';
import { TspModule } from './tsp/tsp.module';
import { WebinarsModule } from './webinars/webinars.module';
import * as dotenv from "dotenv"
import { MongooseModule } from '@nestjs/mongoose';
import { ArchivingFileModule } from './archiving/archiving.module';
import { DeviceModule } from './devices/devices.module';
dotenv.config()

const uri = process.env.MONGO_URL
console.log(uri);

@Module({
  imports: [
    MongooseModule.forRoot(uri),
    ArchivingFileModule,
    CloudRecordingModule, 
    DeviceModule, 
    H323DevicesModule, 
    MeetingsModule, 
    PacModule, 
    ReportsModule, 
    SipphoneModule, 
    TrackingFieldModule, 
    TspModule, 
    WebinarsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
