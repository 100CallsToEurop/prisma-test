import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRepository } from '../infrastructure/repository';
import { CreateUserType, UpdateUserType } from './types';
import { UserMapper } from './user.mapper';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser({ email, name }: CreateUserType): Promise<{ id: number }> {
    await this.checkEmail(email);
    return await this.userRepository.createUser(
      UserMapper.toCreateInput({ email, name }),
    );
  }

  async updateUser(id: number, dto: UpdateUserType): Promise<{ id: number }> {
    await this.checkEmail(dto.email, id);
    const user = await this.userRepository.getUser(id);
    await this.userRepository.updateUser({ id }, UserMapper.toUpdateInput(dto));
    return { id: user.id };
  }

  async deleteUser(id: number): Promise<void> {
    await this.userRepository.deleteUser({ id });
  }

  private async checkEmail(email: string, userId?: number): Promise<void> {
    const checkEmail = await this.userRepository.getByEmail(email);
    if ((!userId && checkEmail) || (userId && checkEmail.id !== userId)) {
      throw new BadRequestException('Email already exists');
    }
  }
}
