import { Injectable } from '@nestjs/common';
import { Prisma, Tag } from 'generated/prisma';
import { PrismaService } from '../../../../prisma/prisma.service';

@Injectable()
export class TagRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createTag(data: Prisma.TagCreateInput): Promise<Tag> {
    return await this.prisma.tag.create({ data });
  }

  async updateTag(
    where: Prisma.TagWhereUniqueInput,
    data: Prisma.TagUpdateInput,
  ): Promise<Tag> {
    return await this.prisma.tag.update({ where, data });
  }

  async deleteTag(where: Prisma.TagWhereUniqueInput): Promise<void> {
    await this.prisma.tag.delete({ where });
  }
  async getTag(id: number): Promise<Tag> {
    return await this.prisma.tag.findUnique({
      where: { id },
    });
  }

  async getTags(): Promise<Tag[]> {
    return await this.prisma.tag.findMany();
  }
}
