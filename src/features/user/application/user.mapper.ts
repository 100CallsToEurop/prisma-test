import { Prisma } from 'generated/prisma';
import { CreateUserType, UpdateUserType } from './types';

export class UserMapper {
  static toCreateInput(dto: CreateUserType): Prisma.UserCreateInput {
    return {
      email: dto.email,
      profile: {
        create: {
          name: dto.name,
        },
      },
    };
  }

  static toUpdateInput(dto: UpdateUserType): Prisma.UserUpdateInput {
    const data: Prisma.UserUpdateInput = {};
    dto?.email && (data.email = dto.email);
    dto?.name && (data.profile = { update: { name: dto.name } });
    return data;
  }
}
