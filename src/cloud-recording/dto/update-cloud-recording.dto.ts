import { PartialType } from '@nestjs/mapped-types';
import { CreateCloudRecordingDto } from './create-cloud-recording.dto';

export class UpdateCloudRecordingDto extends PartialType(CreateCloudRecordingDto) {}
