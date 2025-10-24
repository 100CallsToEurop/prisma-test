import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UserService } from '../application/user.service';
import {
  CreateUserInputDto,
  UpdateUserInputDto,
  UpdateUserProfileInputDto,
} from './dto/input';
import { UsersViewDto, UserViewDto } from './dto/view';
import { UserQueryRepository } from '../infrastructure/repository';
import { IdNumberResponse } from '../../../core/types';
import { UserQueryDto as UserQueryDto } from './dto/query';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly userQueryRepository: UserQueryRepository,
  ) {}

  @Post()
  async createUser(@Body() dto: CreateUserInputDto): Promise<IdNumberResponse> {
    return await this.userService.createUser(dto);
  }

  @Put(':id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateUserInputDto,
  ): Promise<IdNumberResponse> {
    return await this.userService.updateUser(id, dto);
  }

  @Put(':id/profile')
  async updateUserProfile(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateUserProfileInputDto,
  ): Promise<IdNumberResponse> {
    return await this.userService.updateUser(id, dto);
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.userService.deleteUser(id);
  }
  @Get(':id')
  async getUserById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<UserViewDto> {
    return await this.userQueryRepository.getUserById(id);
  }

  @Get()
  async getAllUsers(@Query() query?: UserQueryDto): Promise<UsersViewDto[]> {
    return await this.userQueryRepository.getAllUsers(query);
  }
}
