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
    const { communes, ...regionData } = region;

    await db.insertInto('region').values(regionData).executeTakeFirst();

    const newRegion = await db
      .selectFrom('region')
      .where('roman_number', '=', region.roman_number)
      .select('id')
      .executeTakeFirstOrThrow();

    console.log(`Inserted region ${region.name} with id ${newRegion.id}`);

    const communesToInsert = region.communes.map((commune) => ({
      name: commune.name,
      postal_code: commune.postal_code,
      region_id: newRegion.id,
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
