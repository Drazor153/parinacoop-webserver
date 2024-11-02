import { Injectable } from '@nestjs/common';

import { NullableType } from '@/utils/types/nullable.type';
import { Database } from '@/database/database';

import { User } from '@/users/domain/user';
import { UserRepository } from '@/users/domain/user.repository';

@Injectable()
export class UserPostgresRepository implements UserRepository {
  constructor(private readonly db: Database) {}

  async create(user: User): Promise<void> {
    const { run, email, password } = user.toValue();
    await this.db
      .insertInto('user')
      .values({
        run,
        email,
        password,
      })
      .returning(['run'])
      .execute();
  }

  async findByRun(run: number): Promise<NullableType<User>> {
    const result = await this.db
      .selectFrom('user')
      .selectAll()
      .where('run', '=', run)
      .executeTakeFirst();
    return result
      ? new User({
          run: result.run,
          email: result.email,
          names: result.names,
          firstLastname: result.first_lastname,
          secondLastname: result.second_lastname,
          cellphone: result.cellphone,
          password: result.password,
          passwordAttempts: result.password_attempts,
          role: result.role,
        })
      : null;
  }

  async findByEmail(email: string): Promise<NullableType<User>> {
    const result = await this.db
      .selectFrom('user')
      .selectAll()
      .where('email', '=', email)
      .executeTakeFirst();
    return result
      ? new User({
          run: result.run,
          email: result.email,
          names: result.names,
          firstLastname: result.first_lastname,
          secondLastname: result.second_lastname,
          cellphone: result.cellphone,
          password: result.password,
          passwordAttempts: result.password_attempts,
          role: result.role,
        })
      : null;
  }
}
