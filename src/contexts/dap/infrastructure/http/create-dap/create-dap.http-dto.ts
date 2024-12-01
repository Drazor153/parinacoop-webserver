import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsInt, IsNotEmpty, IsPositive, Min } from 'class-validator';

export class CreateDapHttpDto {
  @ApiProperty()
  @IsNotEmpty()
  userRun!: number;

  @ApiProperty()
  @IsNotEmpty()
  type!: string;

  @ApiProperty()
  @IsNotEmpty()
  currencyType!: string;

  @ApiProperty()
  @IsPositive()
  days!: number;

  @ApiProperty()
  @Min(50000)
  @IsInt()
  initialAmount!: number;
}
