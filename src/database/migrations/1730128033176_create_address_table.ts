import { Kysely } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('address')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('type_address', 'varchar', (col) => col.notNull())
    .addColumn('street', 'varchar', (col) => col.notNull())
    .addColumn('number', 'smallint', (col) => col.notNull())
    .addColumn('detail', 'varchar')
    .addColumn('commune_id', 'smallint', (col) =>
      col.references('commune.id').onDelete('set null'),
    )
    .addColumn('user_run', 'integer', (col) =>
      col.references('user.run').onDelete('cascade').notNull(),
    )
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('address');
}
