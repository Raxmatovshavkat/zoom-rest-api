import { Injectable } from '@nestjs/common';
import { CreateSipphoneDto } from './dto/create-sipphone.dto';
import { UpdateSipphoneDto } from './dto/update-sipphone.dto';

@Injectable()
export class SipphoneService {
  create(createSipphoneDto: CreateSipphoneDto) {
    return 'This action adds a new sipphone';
  }

  findAll() {
    return `This action returns all sipphone`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sipphone`;
  }

  update(id: number, updateSipphoneDto: UpdateSipphoneDto) {
    return `This action updates a #${id} sipphone`;
  }

  remove(id: number) {
    return `This action removes a #${id} sipphone`;
  }
}
