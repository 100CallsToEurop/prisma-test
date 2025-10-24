import { Prisma } from 'generated/prisma';
import { CreatePostType, UpdatePostType } from './types';

export class PostMapper {
  static toCreateInput(
    userId: number,
    dto: CreatePostType,
  ): Prisma.PostCreateInput {
    return {
      title: dto.title,
      content: dto.content,
      author: { connect: { id: userId } },
      tags: dto?.tags
        ? { connect: [...dto.tags.map((tag) => ({ id: tag }))] }
        : undefined,
    };
  }

  static toUpdateInput(dto: UpdatePostType): Prisma.PostUpdateInput {
    const data: Prisma.PostUpdateInput = {};
    dto?.title && (data.title = dto.title);
    dto?.content && (data.content = dto.content);
    dto?.tags &&
      (data.tags = { set: [...dto.tags.map((tag) => ({ id: tag }))] });
    return data;
  }
}
