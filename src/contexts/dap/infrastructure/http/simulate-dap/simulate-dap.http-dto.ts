import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, Min } from 'class-validator';

export class SimulateDapDto {
  @ApiProperty()
  @IsNotEmpty()
  type!: string;

  @ApiProperty()
  @Min(50000)
  @IsInt()
  initialAmount!: number;
}
