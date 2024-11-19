import { Role } from '@/roles/roles.enum';
import { Profile } from './profile';

interface UserModelData {
  run: number;
  role: Role;
  password: string;
  profile_id?: number;
  email?: string;
  document_number?: number;
  cellphone?: string;
}

export class User {
  run: number;
  role: Role;
  password: string;
  profile?: Profile;

  constructor({
    run,
    role,
    password,
    profile_id,
    email,
    document_number,
    cellphone,
  }: UserModelData) {
    this.run = run;
    this.role = role;
    this.password = password;

    if (profile_id) {
      this.profile = new Profile({
        id: profile_id,
        email,
        documentNumber: document_number,
        cellphone,
      });
    }
  }
}
