import { Injectable } from '@nestjs/common';
import { CreateH323DeviceDto } from './dto/create-h323-device.dto';
import { UpdateH323DeviceDto } from './dto/update-h323-device.dto';

@Injectable()
export class H323DevicesService {
  create(createH323DeviceDto: CreateH323DeviceDto) {
    return 'This action adds a new h323Device';
  }

  findAll() {
    return `This action returns all h323Devices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} h323Device`;
  }

  update(id: number, updateH323DeviceDto: UpdateH323DeviceDto) {
    return `This action updates a #${id} h323Device`;
  }

  remove(id: number) {
    return `This action removes a #${id} h323Device`;
  }
}
