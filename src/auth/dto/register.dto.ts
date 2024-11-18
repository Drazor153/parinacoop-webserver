import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
import { IsValidRun } from '../validators/rut.validator';

export class RegisterDto {
  @IsValidRun()
  @IsNotEmpty()
  run: string;

  @MinLength(8)
  @IsString()
  @IsNotEmpty()
  password: string;

  @IsInt()
  @IsNotEmpty()
  documentNumber: number;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  cellphone: string;
}
