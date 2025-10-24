import { Prisma } from 'generated/prisma';

export type PostResponse = Prisma.PostGetPayload<{
  select: {
    id: true;
    title: true;
    content: true;
    createdAt: true;
    author: {
      select: {
        profile: {
          select: {
            name: true;
          };
        };
      };
    };
    tags: {
      select: {
        id: true;
        name: true;
      };
    };
  };
}>;
