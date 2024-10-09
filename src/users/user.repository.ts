import { Database } from '@/database/database';
import { User } from '@/users/domain/user';
import { UserRepository } from '@/users/domain/user.repository';
import { NullableType } from '@/utils/types/nullable.type';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserPostgresRepository implements UserRepository {
  constructor(private readonly db: Database) {}

  async create(): Promise<User> {
    return new User();
  }

  findByRun(run: User['run']): Promise<NullableType<User>> {
    return this.db
      .selectFrom('user')
      .selectAll()
      .where('run', '=', run)
      .executeTakeFirst();
  }
}
