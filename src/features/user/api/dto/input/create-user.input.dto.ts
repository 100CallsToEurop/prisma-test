import { IsEmail, IsString } from 'class-validator';

export class CreateUserInputDto {
  @IsString()
  @IsEmail()
  email: string;
  @IsString()
  name: string;
}
