import { IsOptional, IsString } from 'class-validator';

export class UpdateUserProfileInputDto {
  @IsString()
  @IsOptional()
  name?: string;
}
