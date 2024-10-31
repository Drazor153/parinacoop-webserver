import { Injectable } from '@nestjs/common';

import { Database } from '@/database/database';

import { RegionRepository } from './domain/region.repository';
import { Region } from './domain/region';

@Injectable()
export class RegionPostgresRepository implements RegionRepository {
  constructor(private readonly db: Database) {}

  async create(region: Region): Promise<void> {
    const values = region.toValue();
    const result = await this.db
      .insertInto('region')
      .values({
        name: values.name,
        number: values.number,
        roman_number: values.romanNumber,
        abbreviation: values.abbreviation,
      })
      .returning(['id'])
      .executeTakeFirst();

    region.id = Number(result.id);
  }
  async findAll(): Promise<Region[]> {
    const regions = await this.db.selectFrom('region').selectAll().execute();
    return regions.map(
      (region) =>
        new Region({
          id: region.id,
          name: region.name,
          romanNumber: region.roman_number,
          number: region.number,
          abbreviation: region.abbreviation,
        }),
    );
  }
}
