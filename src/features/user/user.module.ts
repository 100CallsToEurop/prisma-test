import { Module } from '@nestjs/common';
import { UserService } from './application';
import {
  UserRepository,
  UserQueryRepository,
} from './infrastructure/repository';
import { UserController } from './api';
import { PostModule } from '../post/post.module';

@Module({
  imports: [PostModule],
  providers: [UserService, UserRepository, UserQueryRepository],
  controllers: [UserController],
  exports: [],
})
export class UserModule {}
