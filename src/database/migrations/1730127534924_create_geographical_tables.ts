import { Kysely } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('region')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('name', 'varchar', (col) => col.notNull())
    .addColumn('romanNumber', 'varchar', (col) => col.notNull())
    .addColumn('number', 'smallint', (col) => col.notNull())
    .addColumn('abbreviation', 'varchar', (col) => col.notNull())
    .execute();

  await db.schema
    .createTable('commune')
    .addColumn('id', 'varchar', (col) => col.primaryKey())
    .addColumn('name', 'varchar', (col) => col.notNull())
    .addColumn('postalCode', 'integer', (col) => col.notNull())
    .addColumn('region_id', 'integer', (col) =>
      col.references('region.id').onDelete('cascade').notNull(),
    )
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('region').execute();
  await db.schema.dropTable('commune').execute();
}
