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

    const { insertId } = await db
      .insertInto('region')
      .values(regionData)
      .executeTakeFirst();

    console.log(`Inserted region ${region.name} with id ${insertId}`);

    const communesToInsert = region.communes.map((commune) => ({
      name: commune.name,
      postal_code: commune.postal_code,
      region_id: insertId,
    }));

    communes.push(...communesToInsert);
  }

  console.log('Inserting communes');
  await sql`INSERT INTO commune values ${communes.map((c) => `(${c.name}, ${c.postal_code}, ${c.region_id})`).join(', ')}`.execute(
    db,
  ),
    await db.insertInto('commune').values(communes).execute();
};

export const down: Migration['down'] = async (db) => {
  await db.deleteFrom('commune').execute();
  await db.deleteFrom('region').execute();
};
