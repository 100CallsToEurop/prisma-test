import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/prisma.service';
import { Prisma } from 'generated/prisma';
import { TagResponse } from './type';

@Injectable()
export class TagQueryRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getTagById(id: number): Promise<TagResponse> {
    return await this.prisma.tag.findUnique({
      select: {
        id: true,
        name: true,
        posts: {
          select: {
            id: true,
            title: true,
          },
        },
      },
      where: { id },
    });
  }

  async getAllTags(params?: Prisma.TagFindManyArgs): Promise<TagResponse[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return await this.prisma.tag.findMany({
      select: {
        id: true,
        name: true,
        posts: {
          select: {
            id: true,
            title: true,
          },
        },
      },
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
}
