import { UsersResponse } from '../../../infrastructure/repository/type';

class ProfileViewModel {
  name: string;
  avatarUrl: string;
}
export class UsersViewDto implements UsersResponse {
  id: number;
  email: string;
  profile: ProfileViewModel;
  createdAt: Date;
}
