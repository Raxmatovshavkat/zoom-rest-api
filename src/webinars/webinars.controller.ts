import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WebinarsService } from './webinars.service';
import { CreateWebinarDto } from './dto/create-webinar.dto';
import { UpdateWebinarDto } from './dto/update-webinar.dto';

@Controller('webinars')
export class WebinarsController {
  constructor(private readonly webinarsService: WebinarsService) {}

  @Post()
  create(@Body() createWebinarDto: CreateWebinarDto) {
    return this.webinarsService.create(createWebinarDto);
  }

  @Get()
  findAll() {
    return this.webinarsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.webinarsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWebinarDto: UpdateWebinarDto) {
    return this.webinarsService.update(+id, updateWebinarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.webinarsService.remove(+id);
  }
}
