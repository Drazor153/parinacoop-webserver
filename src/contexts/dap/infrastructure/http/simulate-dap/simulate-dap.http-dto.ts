import { IsInt, IsNotEmpty, Min } from 'class-validator';

export class SimulateDapDto {
  @IsNotEmpty()
  type!: string;

  @Min(50000)
  @IsInt()
  initialAmount!: number;
}
