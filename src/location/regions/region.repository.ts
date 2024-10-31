import { Database } from '@/database/database';
import { RegionRepository } from './domain/region.repository';
import { Region } from './domain/region';
import { NewRegion } from '@/database/tables/region';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RegionPostgresRepository implements RegionRepository {
  constructor(private db: Database) {}

  async create(region: Region): Promise<number> {
    return 0;
  }
  async findAll(): Promise<Region[]> {
    const regions = await this.db.selectFrom('region').selectAll().execute();
    return regions.map((region) =>
      Region.create({
        id: region.id,
        name: region.name,
        romanNumber: region.roman_number,
        number: region.number,
        abbreviation: region.abbreviation,
      }),
    );
  }
}
