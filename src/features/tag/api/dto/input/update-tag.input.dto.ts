import { IsOptional, IsString } from 'class-validator';

export class UpdateTagInputDto {
  @IsString()
  @IsOptional()
  name?: string;
}
