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
import { PostService } from '../application/post.service';
import { PostQueryRepository } from '../infrastructure/repository';
import { IdNumberResponse } from '../../../core/types';
import { CreatePostInputDto, UpdatePostInputDto } from './dto/input';
import { PostViewDto } from './dto/view';
import { PostQueryDto } from './dto/query';

@Controller('users/:userId/posts')
export class UserPostController {
  constructor(
    private readonly postService: PostService,
    private readonly postQueryRepository: PostQueryRepository,
  ) {}

  @Post()
  async createUser(
    @Param('userId', ParseIntPipe) userId: number,
    @Body() dto: CreatePostInputDto,
  ): Promise<IdNumberResponse> {
    return await this.postService.createPost(userId, dto);
  }

  @Put(':postId')
  async updatePost(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('postId', ParseIntPipe) postId: number,
    @Body() dto: UpdatePostInputDto,
  ): Promise<IdNumberResponse> {
    return await this.postService.updatePost(userId, postId, dto);
  }

  @Delete(':postId')
  async deletePost(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('postId', ParseIntPipe) postId: number,
  ): Promise<void> {
    await this.postService.deletePost(userId, postId);
  }
  @Get(':postId')
  async getPostById(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('postId', ParseIntPipe) postId: number,
  ): Promise<PostViewDto> {
    return await this.postQueryRepository.getPostById(userId, postId);
  }

  @Get()
  async getAllPosts(
    @Param('userId', ParseIntPipe) userId: number,
    @Query() query?: PostQueryDto,
  ): Promise<PostViewDto[]> {
    return await this.postQueryRepository.getAllPosts(query, userId);
  }
}
