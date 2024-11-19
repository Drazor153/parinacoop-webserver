import { Role } from '@/roles/roles.enum';

export interface UserRequest {
  run: number;
  role: Role;
}
