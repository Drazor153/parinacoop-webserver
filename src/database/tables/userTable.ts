import { RolesEnum } from '@/roles/roles.enum';

export interface UserTable {
  run: number;
  role: RolesEnum;
  password: string;
  password_attempts: number;
  enabled: boolean;
  created_at: number;
  updated_at: number;
}
