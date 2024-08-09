import { PartialType } from '@nestjs/mapped-types';
import { CreateArchivingDto } from './create-archiving.dto';

export class UpdateArchivingDto extends PartialType(CreateArchivingDto) {}
