import { PartialType } from '@nestjs/mapped-types';
import { CreateH323DeviceDto } from './create-h323-device.dto';

export class UpdateH323DeviceDto extends PartialType(CreateH323DeviceDto) {}
