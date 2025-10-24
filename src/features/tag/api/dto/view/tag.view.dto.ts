import { TagResponse } from '../../../infrastructure/repository/type';

class PostTagViewModel {
  id: number;
  title: string;
}

export class TagViewDto implements TagResponse {
  id: number;
  name: string;
  posts: PostTagViewModel[];
}
