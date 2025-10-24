import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/prisma.service';
import { Prisma } from 'generated/prisma';
import { UserResponse, UsersResponse } from './type';

@Injectable()
export class UserQueryRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getUserById(id: number): Promise<UserResponse> {
    return await this.prisma.user.findUnique({
      select: {
        id: true,
        email: true,
        createdAt: true,
        profile: {
          select: {
            name: true,
            avatarUrl: true,
          },
        },
        posts: true,
      },
      where: { id },
    });
  }

  async getAllUsers(
    params?: Prisma.UserFindManyArgs,
  ): Promise<UsersResponse[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return await this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        createdAt: true,
        profile: {
          select: {
            name: true,
            avatarUrl: true,
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
