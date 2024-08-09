import { Injectable } from '@nestjs/common';
import { CreateTspDto } from './dto/create-tsp.dto';
import { UpdateTspDto } from './dto/update-tsp.dto';

@Injectable()
export class TspService {
  create(createTspDto: CreateTspDto) {
    return 'This action adds a new tsp';
  }

  findAll() {
    return `This action returns all tsp`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tsp`;
  }

  update(id: number, updateTspDto: UpdateTspDto) {
    return `This action updates a #${id} tsp`;
  }

  remove(id: number) {
    return `This action removes a #${id} tsp`;
  }
}
