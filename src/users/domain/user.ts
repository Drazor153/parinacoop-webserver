import { Role } from '@/contexts/shared/enums/roles.enum';
import { PrimitiveProfile, Profile } from './profile';
import { Address, PrimitiveAddress } from './address';

export interface PrimitiveUser {
  run: number;
  role: Role;
  password?: string;
  profile?: Profile;
  address?: Address;
}

export class User {
  constructor(private attributes: PrimitiveUser) {}

  set profile(data: PrimitiveProfile) {
    this.attributes.profile = new Profile(data);
  }

  set address(data: PrimitiveAddress) {
    this.attributes.address = new Address(data);
  }

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
