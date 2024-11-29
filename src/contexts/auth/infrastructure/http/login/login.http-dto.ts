import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class LoginHttpDto {
  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  run!: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password!: string;
}
