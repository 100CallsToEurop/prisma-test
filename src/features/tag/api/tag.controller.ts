import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TagService } from '../application/tag.service';
import { CreateTagInputDto, UpdateTagInputDto } from './dto/input';
import { TagViewDto } from './dto/view';
import { TagQueryRepository } from '../infrastructure/repository';
import { IdNumberResponse } from '../../../core/types';
import { TagQueryDto as UserQueryDto } from './dto/query';

@Controller('tags')
export class TagController {
  constructor(
    private readonly tagService: TagService,
    private readonly tagQueryRepository: TagQueryRepository,
  ) {}

  @Post()
  async createUser(@Body() dto: CreateTagInputDto): Promise<IdNumberResponse> {
    return await this.tagService.createTag(dto);
  }

  @Put(':id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateTagInputDto,
  ): Promise<IdNumberResponse> {
    return await this.tagService.updateTag(id, dto);
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.tagService.deleteTag(id);
  }
  @Get(':id')
  async getUserById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<TagViewDto> {
    return await this.tagQueryRepository.getTagById(id);
  }

  @Get()
  async getAllUsers(@Query() query?: UserQueryDto): Promise<TagViewDto[]> {
    return await this.tagQueryRepository.getAllTags(query);
  }
}
