import { Role } from '@/roles/roles.enum';
import { Profile } from './profile';
import { Address } from './address';

export interface PrimitiveUser {
  run: number;
  role: Role;
  password?: string;
  profile?: Profile;
  address?: Address;
}

export class User {
  constructor(private attributes: PrimitiveUser) {}

  toDomain() {
    return {
      run: this.attributes.run,
      role: this.attributes.role,
      password: this.attributes.password,
      profile: this.attributes.profile?.toDomain(),
      address: this.attributes.address?.toDomain(),
    };
  }

  toPersistence() {
    return {
      run: this.attributes.run,
      role: this.attributes.role,
      password: this.attributes.password,
      profile: this.attributes.profile?.toPersistence(),
      address: this.attributes.address?.toPersistence(),
    };
  }
}
