import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsInt()
  @IsNotEmpty()
  run: number;

  @IsString()
  @IsNotEmpty()
  password: string;
}
