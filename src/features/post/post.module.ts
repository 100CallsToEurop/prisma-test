import { Module } from '@nestjs/common';
import {
  PostQueryRepository,
  PostRepository,
} from './infrastructure/repository';
import { PostController, UserPostController } from './api';
import { PostService } from './application';

@Module({
  imports: [],
  providers: [PostService, PostRepository, PostQueryRepository],
  controllers: [PostController, UserPostController],
  exports: [PostService],
})
export class PostModule {}
