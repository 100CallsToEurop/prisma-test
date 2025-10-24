import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/prisma.service';
import { Prisma } from 'generated/prisma';
import { PostResponse } from './type';

@Injectable()
export class PostQueryRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getPostById(userId: number, id: number): Promise<PostResponse> {
    return await this.prisma.post.findUnique({
      select: {
        id: true,
        title: true,
        content: true,
        createdAt: true,
        author: {
          select: {
            profile: {
              select: {
                name: true,
              },
            },
          },
        },
        tags: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      where: { id, author: { id: userId } },
    });
  }

  async getAllPosts(
    params?: Prisma.PostFindManyArgs,
    userId?: number,
  ): Promise<PostResponse[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return await this.prisma.post.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        createdAt: true,
        author: {
          select: {
            profile: {
              select: {
                name: true,
              },
            },
          },
        },
        tags: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      skip,
      take,
      cursor,
      where: {
        authorId: userId ? userId : undefined,
      },
      orderBy,
    });
  }
}
