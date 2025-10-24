import { UserResponse } from '../../../infrastructure/repository/type';

class ProfileViewModel {
  name: string;
  avatarUrl: string;
}
class PostViewModel {
  id: number;
  createdAt: Date;
  title: string;
  content: string;
}
export class UserViewDto implements UserResponse {
  posts: PostViewModel[];
  id: number;
  email: string;
  profile: ProfileViewModel;
  createdAt: Date;
}
