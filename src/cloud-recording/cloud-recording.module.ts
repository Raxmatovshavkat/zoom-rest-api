import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CloudRecording, CloudRecordingSchema } from './entities/cloud-recording.entity';
import { RecordingsService } from './cloud-recording.service';
import { RecordingsController } from './cloud-recording.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CloudRecording.name, schema: CloudRecordingSchema },
    ]),
  ],
  providers: [RecordingsService],
  controllers: [RecordingsController],
  exports: [RecordingsService],
})
export class CloudRecordingModule { }
