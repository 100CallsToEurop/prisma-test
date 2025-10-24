import { Injectable } from '@nestjs/common';
import { Prisma, Post } from 'generated/prisma';
import { PrismaService } from '../../../../prisma/prisma.service';

@Injectable()
export class PostRepository {
  constructor(private readonly prisma: PrismaService) {}
  async createPost(data: Prisma.PostCreateInput): Promise<Post> {
    return await this.prisma.post.create({ data });
  }

  async updatePost(
    where: Prisma.PostWhereUniqueInput,
    data: Prisma.PostUpdateInput,
  ): Promise<Post> {
    return await this.prisma.post.update({ where, data });
  }

  async deletePost(where: Prisma.PostWhereUniqueInput): Promise<void> {
    await this.prisma.post.delete({ where });
  }
  async getPost(where: Prisma.PostWhereUniqueInput): Promise<Post> {
    return await this.prisma.post.findUnique({
      where,
    });
  }

  async getPosts(where: Prisma.PostWhereUniqueInput): Promise<Post[]> {
    return await this.prisma.post.findMany({ where });
  }
}
