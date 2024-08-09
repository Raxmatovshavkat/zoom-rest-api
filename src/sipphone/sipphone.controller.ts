import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SipphoneService } from './sipphone.service';
import { CreateSipphoneDto } from './dto/create-sipphone.dto';
import { UpdateSipphoneDto } from './dto/update-sipphone.dto';

@Controller('sipphone')
export class SipphoneController {
  constructor(private readonly sipphoneService: SipphoneService) {}

  @Post()
  create(@Body() createSipphoneDto: CreateSipphoneDto) {
    return this.sipphoneService.create(createSipphoneDto);
  }

  @Get()
  findAll() {
    return this.sipphoneService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sipphoneService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSipphoneDto: UpdateSipphoneDto) {
    return this.sipphoneService.update(+id, updateSipphoneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sipphoneService.remove(+id);
  }
}
