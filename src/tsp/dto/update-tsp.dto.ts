import { PartialType } from '@nestjs/mapped-types';
import { CreateTspDto } from './create-tsp.dto';

export class UpdateTspDto extends PartialType(CreateTspDto) {}
