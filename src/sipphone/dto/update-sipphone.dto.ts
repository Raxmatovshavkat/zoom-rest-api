import { PartialType } from '@nestjs/mapped-types';
import { CreateSipphoneDto } from './create-sipphone.dto';

export class UpdateSipphoneDto extends PartialType(CreateSipphoneDto) {}
