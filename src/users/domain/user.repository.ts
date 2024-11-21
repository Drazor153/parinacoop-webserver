import { NullableType } from '@/utils/types/nullable.type';
import { Role } from '@/roles/roles.enum';

import { User } from './user';

export abstract class UserRepository {
  abstract create(user: User): Promise<User>;
  abstract findByRun(run: number): Promise<NullableType<User>>;
  abstract findByRole(role: Role): Promise<User[]>;
  abstract getClient(run: number): Promise<NullableType<User>>;
}
