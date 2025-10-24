import { Prisma } from 'generated/prisma';

export class PostQueryDto implements Prisma.PostFindManyArgs {
  skip?: number;
  take?: number;
  cursor?: Prisma.PostWhereUniqueInput;
  where?: Prisma.PostWhereInput;
  orderBy?: Prisma.PostOrderByWithRelationInput;
}
