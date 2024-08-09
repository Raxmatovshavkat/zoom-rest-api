import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PacService } from './pac.service';
import { CreatePacDto } from './dto/create-pac.dto';
import { UpdatePacDto } from './dto/update-pac.dto';

@Controller('pac')
export class PacController {
  constructor(private readonly pacService: PacService) {}

  @Post()
  create(@Body() createPacDto: CreatePacDto) {
    return this.pacService.create(createPacDto);
  }

  @Get()
  findAll() {
    return this.pacService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pacService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePacDto: UpdatePacDto) {
    return this.pacService.update(+id, updatePacDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pacService.remove(+id);
  }
}
