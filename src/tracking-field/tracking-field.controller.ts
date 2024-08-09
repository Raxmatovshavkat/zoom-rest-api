import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrackingFieldService } from './tracking-field.service';
import { CreateTrackingFieldDto } from './dto/create-tracking-field.dto';
import { UpdateTrackingFieldDto } from './dto/update-tracking-field.dto';

@Controller('tracking-field')
export class TrackingFieldController {
  constructor(private readonly trackingFieldService: TrackingFieldService) {}

  @Post()
  create(@Body() createTrackingFieldDto: CreateTrackingFieldDto) {
    return this.trackingFieldService.create(createTrackingFieldDto);
  }

  @Get()
  findAll() {
    return this.trackingFieldService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trackingFieldService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTrackingFieldDto: UpdateTrackingFieldDto) {
    return this.trackingFieldService.update(+id, updateTrackingFieldDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trackingFieldService.remove(+id);
  }
}
