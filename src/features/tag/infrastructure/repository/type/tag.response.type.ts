import { Prisma } from 'generated/prisma';

export type TagResponse = Prisma.TagGetPayload<{
  select: {
    id: true;
    name: true;
    posts: {
      select: {
        id: true;
        title: true;
      };
    };
  };
}>;
