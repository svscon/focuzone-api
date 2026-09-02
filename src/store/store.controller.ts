import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { StoreService } from './store.service';
import { CreateStoreDto, StoreQueryDto, UpdateStoreDto } from './store.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('门店管理')
@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) { }

  @Post()
  create(@Body() createStoreDto: CreateStoreDto) {
    return this.storeService.create(createStoreDto);
  }

  @Get()
  findAll(@Query() query: StoreQueryDto) {
    return this.storeService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.storeService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateStoreDto: UpdateStoreDto) {
    return this.storeService.update(id, updateStoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storeService.remove(id);
  }
}
