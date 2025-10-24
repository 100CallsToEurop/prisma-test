import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { PostModule } from './features/post/post.module';
import { UserModule } from './features/user/user.module';
import { TagModule } from './features/tag/tag.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    PrismaModule,
    UserModule,
    PostModule,
    TagModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
