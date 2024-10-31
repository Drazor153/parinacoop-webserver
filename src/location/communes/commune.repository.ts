import { Database } from '@/database/database';
import { CommuneRepository } from './domain/commune.repository';
import { Commune } from './domain/commune';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommunePostgresRepository implements CommuneRepository {
  constructor(private readonly db: Database) {}

  async create(commune: Commune): Promise<void> {
    const values = commune.toValue();

    const result = await this.db
      .insertInto('commune')
      .values({
        name: values.name,
        postal_code: values.postalCode,
        region_id: values.regionId,
      })
      .returning(['id'])
      .executeTakeFirst();

    commune.id = Number(result.id);
  }
  // async findAll(): Promise<Commune[]> {
  //   const communes = await this.db.selectFrom('commune').selectAll().execute();
  //   return communes.map(
  //     (commune) =>
  //       new Commune({
  //         id: commune.id,
  //         name: commune.name,
  //         postalCode: commune.postal_code,
  //       }),
  //   );
  // }
}
