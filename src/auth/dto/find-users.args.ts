import {
  IsDefined,
  IsInt,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class FindUsersArgs {
  @IsDefined()
  @IsInt()
  @Min(0)
  skip: number;

  @IsDefined()
  @IsInt()
  @Min(1)
  @Max(100)
  take: number;

  @IsOptional()
  @IsString()
  userName?: string;
}
