import { Prisma } from 'generated/prisma';
import { CreateTagType, UpdateTagType } from './types';

export class TagMapper {
  static toCreateInput(dto: CreateTagType): Prisma.TagCreateInput {
    return {
      name: dto.name,
    };
  }

  static toUpdateInput(dto: UpdateTagType): Prisma.TagUpdateInput {
    const data: Prisma.TagUpdateInput = {};
    dto?.name && (data.name = dto.name);
    return data;
  }
}
