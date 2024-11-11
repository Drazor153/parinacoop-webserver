import { Injectable } from '@nestjs/common';

import { NullableType } from '@/utils/types/nullable.type';
import { Database } from '@/database/database';

import { User } from '@/users/domain/user';
import { UserRepository } from '@/users/domain/user.repository';

@Injectable()
export class UserPostgresRepository implements UserRepository {
  constructor(private readonly db: Database) {}

  async create(user: User): Promise<User> {
    const databaseResult = await this.db
      .insertInto('user')
      .values({
        run: user.run,
        role: user.role,
        password: user.password,
      })
      .returningAll()
      .executeTakeFirst();

    await this.db
      .insertInto('client_profile')
      .values({
        user_run: user.run,
        cellphone: user.profile.cellphone,
        email: user.profile.email,
        document_number: user.profile.documentNumber,
      })
      .execute();

    return new User(databaseResult);
  }

  async findByRun(run: number): Promise<NullableType<User>> {
    const result = await this.db
      .selectFrom('user')
      .select(['run', 'role', 'password'])
      .where('run', '=', run)
      .executeTakeFirst();
    return result ? new User(result) : null;
  }

  async existsByRun(run: number): Promise<boolean> {
    const result = await this.db
      .selectFrom('user')
      .where('run', '=', run)
      .executeTakeFirst();

    return !!result;
  }

  async existsByEmail(email: string): Promise<boolean> {
    const result = await this.db
      .selectFrom('client_profile')
      .where('email', '=', email)
      .executeTakeFirst();

    return !!result;
  }

  async existsByDocumentNumber(documentNumber: number): Promise<boolean> {
    const result = await this.db
      .selectFrom('client_profile')
      .where('document_number', '=', documentNumber)
      .executeTakeFirst();

    return !!result;
  }
}
