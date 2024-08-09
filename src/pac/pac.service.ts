import { Injectable } from '@nestjs/common';
import { CreatePacDto } from './dto/create-pac.dto';
import { UpdatePacDto } from './dto/update-pac.dto';

@Injectable()
export class PacService {
  create(createPacDto: CreatePacDto) {
    return 'This action adds a new pac';
  }

  findAll() {
    return `This action returns all pac`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pac`;
  }

  update(id: number, updatePacDto: UpdatePacDto) {
    return `This action updates a #${id} pac`;
  }

  remove(id: number) {
    return `This action removes a #${id} pac`;
  }
}
