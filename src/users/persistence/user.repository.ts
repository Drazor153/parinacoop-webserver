import { Injectable } from '@nestjs/common';

import { NullableType } from '@/utils/types/nullable.type';
import { Database } from '@/database/database';

import { User } from '@/users/domain/user';
import { UniqueAttrs, UserRepository } from '@/users/domain/user.repository';

@Injectable()
export class UserPostgresRepository implements UserRepository {
  constructor(private readonly db: Database) {}

  async create(user: User): Promise<void> {
    const { run, documentNumber, email, cellphone, password, role } =
      user.toValue();
    await this.db
      .insertInto('user')
      .values({
        run,
        document_number: documentNumber,
        email,
        cellphone,
        password,
        role,
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
          documentNumber: result.document_number,
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
          documentNumber: result.document_number,
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

  async findByUniques(uniqueAttrs: UniqueAttrs): Promise<User[]> {
    const result = await this.db
      .selectFrom('user')
      .selectAll()
      .where((eb) =>
        eb.or([
          eb('run', '=', uniqueAttrs.run),
          eb('document_number', '=', uniqueAttrs.documentNumber),
          eb('email', '=', uniqueAttrs.email),
          eb('cellphone', '=', uniqueAttrs.cellphone),
        ]),
      )
      .execute();
    return result.map(
      (row) =>
        new User({
          run: row.run,
          documentNumber: row.document_number,
          email: row.email,
          names: row.names,
          firstLastname: row.first_lastname,
          secondLastname: row.second_lastname,
          cellphone: row.cellphone,
          password: row.password,
          passwordAttempts: row.password_attempts,
          role: row.role,
        }),
    );
  }
}
