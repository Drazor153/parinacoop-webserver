import { Kysely, sql } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('region')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('name', 'varchar', (col) => col.notNull())
    .execute();

  await db.schema
    .createTable('city')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('name', 'varchar', (col) => col.notNull())
    .addColumn('region_id', 'integer', (col) =>
      col.references('region.id').onDelete('cascade').notNull(),
    )
    .execute();

  await db.schema
    .createTable('district')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('name', 'varchar', (col) => col.notNull())
    .addColumn('city_id', 'integer', (col) =>
      col.references('city.id').onDelete('cascade').notNull(),
    )
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('region').execute();
  await db.schema.dropTable('city').execute();
  await db.schema.dropTable('district').execute();
}
