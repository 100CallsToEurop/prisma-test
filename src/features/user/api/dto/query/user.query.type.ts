import { Prisma } from 'generated/prisma';

export class UserQueryDto implements Prisma.UserFindManyArgs {
  skip?: number;
  take?: number;
  cursor?: Prisma.UserWhereUniqueInput;
  where?: Prisma.UserWhereInput;
  orderBy?: Prisma.UserOrderByWithRelationInput;
}
