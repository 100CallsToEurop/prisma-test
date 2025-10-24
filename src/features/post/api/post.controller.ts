import { Controller, Get, Query } from '@nestjs/common';
import { PostQueryRepository } from '../infrastructure/repository';
import { PostViewDto } from './dto/view';
import { PostQueryDto } from './dto/query';

@Controller('posts')
export class PostController {
  constructor(private readonly postQueryRepository: PostQueryRepository) {}

  @Get()
  async getAllPosts(@Query() query?: PostQueryDto): Promise<PostViewDto[]> {
    return await this.postQueryRepository.getAllPosts(query);
  }
}
