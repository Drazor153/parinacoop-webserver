import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../domain/ports/user.repository';
import { Database } from '@/database/database';
import { User } from '../../domain/models/User';
import { Role } from '@/contexts/shared/enums/roles.enum';

@Injectable()
export class PostgreSqlUserRepository implements UserRepository {
  constructor(private db: Database) {}

  async getByRun(run: number): Promise<User | null> {
    const result = await this.db
      .selectFrom('user')
      .where('run', '=', run)
      .select(['run', 'role'])
      .executeTakeFirst();

    return result ? new User(result) : null;
  }

  async getByRole(role: Role): Promise<User[]> {
    const result = await this.db
      .selectFrom('user')
      .where('role', '=', role)
      .select(['run', 'role'])
      .execute();
    return result.map((user) => new User(user));
  }

  async create(user: User): Promise<User> {
    const { run, role, password, address, profile } = user.toValue();
    const newUserClient = await this.db
      .insertInto('user')
      .values({
        run,
        role,
        password: password!,
      })
      .returning(['run', 'role'])
      .executeTakeFirstOrThrow();

    const userClient = new User(newUserClient);

    if (profile) {
      const newProfile = await this.db
        .insertInto('client_profile')
        .values({
          user_run: run,
          names: profile.names,
          first_last_name: profile.firstLastName,
          second_last_name: profile.secondLastName,
          email: profile.email,
          cellphone: profile.cellphone,
          document_number: profile.documentNumber,
        })
        .returning([
          'id',
          'names',
          'first_last_name as firstLastName',
          'second_last_name as secondLastName',
          'document_number as documentNumber',
          'email',
          'cellphone',
        ])
        .executeTakeFirstOrThrow();
      userClient.profile = newProfile;
    }

    if (address) {
      const newAddress = await this.db
        .insertInto('address')
        .values({
          user_run: run,
          type_address: address.typeAddress,
          street: address.street,
          number: address.number,
          detail: address.detail,
          commune_id: address.communeId,
        })
        .returning([
          'id',
          'type_address as typeAddress',
          'street',
          'number',
          'detail',
          'commune_id as communeId',
        ])
        .executeTakeFirstOrThrow();
      userClient.address = newAddress;
    }

    return userClient;
  }
}
