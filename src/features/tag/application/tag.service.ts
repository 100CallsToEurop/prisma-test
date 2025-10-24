import { BadRequestException, Injectable } from '@nestjs/common';
import { TagRepository } from '../infrastructure/repository';
import { CreateTagType, UpdateTagType } from './types';
import { TagMapper } from './tag.mapper';
import { Tag } from 'generated/prisma';

@Injectable()
export class TagService {
  constructor(private readonly tagRepository: TagRepository) {}

  async createTag({ name }: CreateTagType): Promise<{ id: number }> {
    return await this.tagRepository.createTag(
      TagMapper.toCreateInput({ name }),
    );
  }

  async updateTag(id: number, dto: UpdateTagType): Promise<{ id: number }> {
    const user = await this.tagRepository.getTag(id);
    await this.tagRepository.updateTag({ id }, TagMapper.toUpdateInput(dto));
    return { id: user.id };
  }

  async deleteTag(id: number): Promise<void> {
    await this.tagRepository.deleteTag({ id });
  }

  async getTags(): Promise<Tag[]> {
    return await this.tagRepository.getTags();
  }
}
