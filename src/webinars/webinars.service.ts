import { Injectable } from '@nestjs/common';
import { CreateWebinarDto } from './dto/create-webinar.dto';
import { UpdateWebinarDto } from './dto/update-webinar.dto';

@Injectable()
export class WebinarsService {
  create(createWebinarDto: CreateWebinarDto) {
    return 'This action adds a new webinar';
  }

  findAll() {
    return `This action returns all webinars`;
  }

  findOne(id: number) {
    return `This action returns a #${id} webinar`;
  }

  update(id: number, updateWebinarDto: UpdateWebinarDto) {
    return `This action updates a #${id} webinar`;
  }

  remove(id: number) {
    return `This action removes a #${id} webinar`;
  }
}
