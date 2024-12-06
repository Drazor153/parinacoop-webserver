import { Role } from '@/contexts/shared/enums/roles.enum';

export interface PrimitiveUser {
  run: number;
  role: Role;
  password: Buffer;
}
export class User {
  constructor(private attributes: PrimitiveUser) {}

  static create({ run, password, role }: PrimitiveUser) {
    return new User({
      run,
      role,
      password,
    });
  }

  toValue(): PrimitiveUser {
    return this.attributes;
  }
}
