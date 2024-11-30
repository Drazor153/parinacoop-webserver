import { IsNumber } from 'class-validator';

export class UpdateProfileDtoHttp {
  documentNumber!: number;
  names!: string;
  firstLastName!: string;
  secondLastName!: string;
  email!: string;
  cellphone!: string;
  street!: string;
  number!: number;
  detail!: string;
  regionId!: number;
  communeId!: number;
}
