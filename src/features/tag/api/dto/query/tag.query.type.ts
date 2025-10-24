import { Prisma } from 'generated/prisma';

export class TagQueryDto implements Prisma.TagFindManyArgs {
  skip?: number;
  take?: number;
  cursor?: Prisma.TagWhereUniqueInput;
  where?: Prisma.TagWhereInput;
  orderBy?: Prisma.TagOrderByWithRelationInput;
}
