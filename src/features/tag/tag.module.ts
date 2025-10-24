import { Module } from '@nestjs/common';
import { TagService } from './application';
import { TagQueryRepository, TagRepository } from './infrastructure/repository';
import { TagController } from './api';

@Module({
  imports: [],
  controllers: [TagController],
  providers: [TagService, TagQueryRepository, TagRepository],
  exports: [TagService],
})
export class TagModule {}
