import { NullableType } from '@/utils/types/nullable.type';
import { User } from './user';

export abstract class UserRepository {
  abstract create(user: User): Promise<void>;
  abstract findByRun(run: number): Promise<NullableType<User>>;
  abstract findByEmail(email: string): Promise<NullableType<User>>;
}
