import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class LoginHttpDto {
  @IsInt()
  @IsNotEmpty()
  run!: number;

  @IsString()
  @IsNotEmpty()
  password!: string;
}
