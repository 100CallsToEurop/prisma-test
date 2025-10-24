import { Injectable } from '@nestjs/common';
import { PostRepository } from '../infrastructure/repository/post.repository';
import { PostMapper } from './post.mapper';
import { CreatePostType, UpdatePostType } from './types';

@Injectable()
export class PostService {
  constructor(private readonly postRepository: PostRepository) {}

  async createPost(
    userId: number,
    dto: CreatePostType,
  ): Promise<{ id: number }> {
    return await this.postRepository.createPost(
      PostMapper.toCreateInput(userId, dto),
    );
  }

  async updatePost(
    userId: number,
    id: number,
    dto: UpdatePostType,
  ): Promise<{ id: number }> {
    const post = await this.postRepository.getPost({
      id,
      author: { id: userId },
    });
    await this.postRepository.updatePost({ id }, PostMapper.toUpdateInput(dto));
    return { id: post.id };
  }

  async deletePost(userId: number, id: number): Promise<void> {
    await this.postRepository.deletePost({ id, author: { id: userId } });
  }
}
