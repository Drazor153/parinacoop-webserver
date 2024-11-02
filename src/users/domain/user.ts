import { RolesEnum } from '@/roles/roles.enum';

export interface PrimitiveUser {
  run: number;
  documentNumber: number;
  email: string;
  names: string;
  firstLastname: string;
  secondLastname: string;
  cellphone: number;
  password: string;
  passwordAttempts: number;
  role: RolesEnum;
}

export class User {
  constructor(private attributes: PrimitiveUser) {}

  static create(createUser: {
    run: number;
    documentNumber: number;
    email: string;
    password: string;
    role: RolesEnum;
  }): User {
    return new User({
      run: createUser.run,
      documentNumber: createUser.documentNumber,
      email: createUser.email,
      names: '',
      firstLastname: '',
      secondLastname: '',
      cellphone: 0,
      password: createUser.password,
      passwordAttempts: 0,
      role: createUser.role,
    });
  }

  toValue(): PrimitiveUser {
    return this.attributes;
  }
}
