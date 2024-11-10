import { Migration, sql } from 'kysely';

export const up: Migration['up'] = async (db) => {
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
      col.references('user.run').onDelete('cascade').unique().notNull(),
    )
    .execute();
};

export const down: Migration['down'] = async (db) => {
  await db.schema.dropTable('address').execute();
};
