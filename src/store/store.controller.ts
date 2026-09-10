import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, UseGuards } from '@nestjs/common';
import type { Request } from 'express';
import { StoreService } from './store.service';
import { CreateStoreDto, StoreQueryDto, UpdateStoreDto } from './store.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import type { JwtPayload } from '../auth/auth.service';

type AuthenticatedRequest = Request & { user: JwtPayload };

@ApiTags('门店管理')
@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) { }

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Req() request: AuthenticatedRequest, @Body() createStoreDto: CreateStoreDto) {
    return this.storeService.create(createStoreDto, request.user.sub);
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
  @UseGuards(JwtAuthGuard)
  update(@Req() request: AuthenticatedRequest, @Param('id') id: string, @Body() updateStoreDto: UpdateStoreDto) {
    return this.storeService.update(id, updateStoreDto, request.user.sub);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Req() request: AuthenticatedRequest, @Param('id') id: string) {
    return this.storeService.remove(id, request.user.sub);
  }
}
