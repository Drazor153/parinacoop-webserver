import { Injectable } from '@nestjs/common';
import { ClientRepository } from '../../domain/ports/client.repository';
import { Database } from '@/database/database';
import { Client } from '../../domain/models/Client';

@Injectable()
export class PostgreSqlClientRepository implements ClientRepository {
  constructor(private db: Database) {}

  async getProfileByRun(run: number): Promise<Client | null> {
    const result = await this.db
      .selectFrom('client_profile')
      .innerJoin('address', 'address.user_run', 'client_profile.user_run')
      .innerJoin('commune', 'commune.id', 'address.commune_id')
      .innerJoin('region', 'region.id', 'commune.region_id')
      .where('user_run', '=', run)
      .select(['user_run as run',
        'document_number as documentNumber',
        'names',
        'first_last_name as firstLastName',
        'second_last_name as secondLastName',
        'email',
        'cellphone',
        'street',
        'number',
        'detail',
        'region_id as regionId',
        'commune_id as communeId'
      ])
      .executeTakeFirst();
    return result ? new Client(result): null;
  }
}
