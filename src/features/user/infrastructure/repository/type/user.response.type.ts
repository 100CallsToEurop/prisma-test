import { Prisma } from 'generated/prisma';

export type UserResponse = Prisma.UserGetPayload<{
  select: {
    id: true;
    email: true;
    createdAt: true;
    profile: {
      select: {
        name: true;
        avatarUrl: true;
      };
    };
    posts: {
      select: {
        id: true;
        title: true;
        content: true;
        createdAt: true;
      };
    };
  };
}>;

export type UsersResponse = Prisma.UserGetPayload<{
  select: {
    id: true;
    email: true;
    createdAt: true;
    profile: {
      select: {
        name: true;
        avatarUrl: true;
      };
    };
  };
}>;
