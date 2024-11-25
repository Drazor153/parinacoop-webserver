import { Database } from '@/database/database';
import { User } from '../../domain/user';
import { UserRepository } from '../../domain/user.repository';
import { Injectable } from '@/contexts/shared/dependency-injection/injectable';

@Injectable()
export class PostgresUserRepository implements UserRepository {
  constructor(private db: Database) {}

  async getByRun(run: number): Promise<User | null> {
    const result = await this.db
      .selectFrom('user')
      .where('run', '=', run)
      .select(['run', 'role', 'password'])
      .executeTakeFirst();
    return result ? new User(result) : null;
  }
}
