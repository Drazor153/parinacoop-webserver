import { Injectable } from '@nestjs/common';

import { NullableType } from '@/utils/types/nullable.type';
import { Database } from '@/database/database';

import { User } from '@/users/domain/user';
import { UserRepository } from '@/users/domain/user.repository';
import { Profile } from '../domain/profile';
import { Address } from '../domain/address';

@Injectable()
export class UserPostgresRepository implements UserRepository {
  constructor(private readonly db: Database) {}

  async create(user: User): Promise<User> {
    const { run, role, password, profile, address } = user.toPersistence();

    const newUserResult = await this.db
      .insertInto('user')
      .values({
        run,
        role,
        password,
      })
      .returning(['run', 'role'])
      .executeTakeFirst();

    const newProfileResult = await this.db
      .insertInto('client_profile')
      .values(profile)
      .returning([
        'id',
        'names',
        'first_last_name as firstLastName',
        'second_last_name as secondLastName',
        'document_number as documentNumber',
        'email',
        'cellphone',
      ])
      .executeTakeFirst();

    const newAddressResult = await this.db
      .insertInto('address')
      .values(address)
      .returning([
        'id',
        'type_address as typeAddress',
        'street',
        'number',
        'detail',
        'commune_id as communeId',
      ])
      .executeTakeFirst();

    return new User({
      run: newUserResult.run,
      role: newUserResult.role,
      profile: new Profile(newProfileResult),
      address: new Address(newAddressResult),
    });
  }

  async findByRun(run: number): Promise<NullableType<User>> {
    const result = await this.db
      .selectFrom('user')
      .select(['run', 'role', 'password'])
      .where('run', '=', run)
      .executeTakeFirst();
    return result ? new User(result) : null;
  }
}
