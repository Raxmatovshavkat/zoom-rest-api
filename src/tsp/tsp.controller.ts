import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TspService } from './tsp.service';
import { CreateTspDto } from './dto/create-tsp.dto';
import { UpdateTspDto } from './dto/update-tsp.dto';

@Controller('tsp')
export class TspController {
  constructor(private readonly tspService: TspService) {}

  @Post()
  create(@Body() createTspDto: CreateTspDto) {
    return this.tspService.create(createTspDto);
  }

  @Get()
  findAll() {
    return this.tspService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tspService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTspDto: UpdateTspDto) {
    return this.tspService.update(+id, updateTspDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tspService.remove(+id);
  }
}
