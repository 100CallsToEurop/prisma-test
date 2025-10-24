import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class CreatePostInputDto {
  @IsString()
  title: string;
  @IsString()
  content: string;
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @IsNumber({}, { each: true })
  tags?: number[];
}
