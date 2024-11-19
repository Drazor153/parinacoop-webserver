import { Kysely, Migration, sql } from 'kysely';
import { Database } from '../database';
import { regions_communes } from '../seed/regions';

export const up: Migration['up'] = async (db: Database) => {
  const communes: {
    name: string;
    postal_code: number;
    region_id: number;
  }[] = [];
  for (const region of regions_communes) {
    const newRegionId = await db
      .insertInto('region')
      .values({
        name: region.name,
        roman_number: region.romanNumber,
        number: region.number,
        abbreviation: region.abbreviation,
      })
      .returning(['id'])
      .executeTakeFirst();
    console.log(`Inserted region ${region.name} with id ${newRegionId.id}`);

    const communesToInsert = region.communes.map((commune) => ({
      name: commune.name,
      postal_code: commune.postalCode,
      region_id: newRegionId.id,
    }));

    communes.push(...communesToInsert);
  }

  console.log('Inserting communes');
  await db.insertInto('commune').values(communes).execute();
};

export const down: Migration['down'] = async (db) => {
  await db.deleteFrom('commune').execute();
  await db.deleteFrom('region').execute();
};
