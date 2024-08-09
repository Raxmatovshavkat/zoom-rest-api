import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { H323DevicesService } from './h323-devices.service';
import { CreateH323DeviceDto } from './dto/create-h323-device.dto';
import { UpdateH323DeviceDto } from './dto/update-h323-device.dto';

@Controller('h323-devices')
export class H323DevicesController {
  constructor(private readonly h323DevicesService: H323DevicesService) {}

  @Post()
  create(@Body() createH323DeviceDto: CreateH323DeviceDto) {
    return this.h323DevicesService.create(createH323DeviceDto);
  }

  @Get()
  findAll() {
    return this.h323DevicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.h323DevicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateH323DeviceDto: UpdateH323DeviceDto) {
    return this.h323DevicesService.update(+id, updateH323DeviceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.h323DevicesService.remove(+id);
  }
}
