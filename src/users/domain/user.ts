export interface PrimitiveUser {
  run: number;
  email: string;
  names: string;
  firstLastname: string;
  secondLastname: string;
  cellphone: number;
  password: string;
  passwordAttempts: number;
}

export class User {
  constructor(private attributes: PrimitiveUser) {}

  static create(createUser: {
    run: number;
    email: string;
    password: string;
  }): User {
    return new User({
      run: createUser.run,
      email: createUser.email,
      names: '',
      firstLastname: '',
      secondLastname: '',
      cellphone: 0,
      password: createUser.password,
      passwordAttempts: 0,
    });
  }

  toValue(): PrimitiveUser {
    return this.attributes;
  }
}
