import { IsString } from 'class-validator';

export class CreateTagInputDto {
  @IsString()
  name: string;
}
