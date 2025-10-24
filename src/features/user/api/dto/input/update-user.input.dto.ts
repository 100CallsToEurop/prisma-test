import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateUserInputDto {
  @IsString()
  @IsEmail()
  @IsOptional()
  email?: string;
}
