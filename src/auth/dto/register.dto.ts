import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @IsInt()
  @IsNotEmpty()
  run: number;

  @IsInt()
  @IsNotEmpty()
  documentNumber: number;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @MinLength(8)
  @IsString()
  @IsNotEmpty()
  password: string;
}
