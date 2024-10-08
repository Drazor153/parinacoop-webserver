import { User } from '@/users/domain/user';
import { UserRepository } from '@/users/domain/user.repository';
import { NullableType } from '@/utils/types/nullable.type';

export class UserPostgresRepository implements UserRepository {
  async create(): Promise<User> {
    return new User();
  }

  async findByRun(run: User['run']): Promise<NullableType<User>> {
    return new User();
  }
}
