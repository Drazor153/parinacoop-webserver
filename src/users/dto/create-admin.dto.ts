import { IsString, IsNotEmpty, MinLength } from 'class-validator';

import { IsValidRun } from '@/utils/validators/rut.validator';

export class CreateAdminDto {
  @IsValidRun()
  @IsString()
  @IsNotEmpty()
  run!: string;

  @MinLength(8)
  @IsString()
  @IsNotEmpty()
  password!: string;
}
