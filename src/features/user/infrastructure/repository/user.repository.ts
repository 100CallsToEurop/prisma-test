import { Injectable } from '@nestjs/common';
import { Prisma, User } from 'generated/prisma';
import { PrismaService } from '../../../../prisma/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return await this.prisma.user.create({ data });
  }

  async updateUser(
    where: Prisma.UserWhereUniqueInput,
    data: Prisma.UserUpdateInput,
  ): Promise<User> {
    return await this.prisma.user.update({ where, data });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<void> {
    await this.prisma.user.delete({ where });
  }
  async getUser(id: number): Promise<User> {
    return await this.prisma.user.findUnique({
      where: { id },
    });
  }

  async getByEmail(email: string): Promise<User> {
    return await this.prisma.user.findUnique({
      where: { email },
    });
  }

  async getUsers(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }
}
