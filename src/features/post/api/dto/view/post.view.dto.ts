import { PostResponse } from '../../../infrastructure/repository/type';

class PostTagViewModel {
  id: number;
  name: string;
}
export class PostViewDto implements PostResponse {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  author: { profile: { name: string } };
  tags: PostTagViewModel[];
}
