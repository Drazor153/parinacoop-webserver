import {
  IsNotEmpty,
  MinLength,
  IsString,
  IsInt,
  IsEmail,
  IsPositive,
} from 'class-validator';
import { IsValidRun } from '@/auth/validators/rut.validator';

export class CreateClientDto {
  @IsValidRun()
  @IsString()
  @IsNotEmpty()
  run: string;

  @MinLength(8)
  @IsString()
  @IsNotEmpty()
  password: string;

  @IsPositive()
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

  @IsString()
  @IsNotEmpty()
  names: string;

  @IsString()
  @IsNotEmpty()
  firstLastName: string;

  @IsString()
  @IsNotEmpty()
  secondLastName: string;

  @IsString()
  @IsNotEmpty()
  typeAddress: string;

  @IsString()
  @IsNotEmpty()
  street: string;

  @IsPositive()
  @IsInt()
  @IsNotEmpty()
  number: number;

  @IsString()
  @IsNotEmpty()
  detail: string;

  @IsPositive()
  @IsInt()
  @IsNotEmpty()
  communeId: number;
}
