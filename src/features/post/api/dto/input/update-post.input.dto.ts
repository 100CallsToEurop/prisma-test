import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class UpdatePostInputDto {
  @IsString()
  @IsOptional()
  title?: string;
  @IsString()
  @IsOptional()
  content?: string;
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @IsNumber({}, { each: true })
  tags?: number[];
}
