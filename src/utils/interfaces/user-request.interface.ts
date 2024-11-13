import { RolesEnum } from '@/roles/roles.enum';

export interface UserRequest {
  run: number;
  role: RolesEnum;
}
