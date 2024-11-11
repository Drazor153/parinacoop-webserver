import { Migration, sql } from 'kysely';

export const up: Migration['up'] = async (db) => {
  await db.schema
    .createTable('client_profile')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('user_run', 'integer', (col) =>
      col.references('user.run').onDelete('cascade').unique().notNull(),
    )
    .addColumn('document_number', 'integer', (col) => col.notNull().unique())
    .addColumn('email', 'varchar', (col) => col.notNull().unique())
    .addColumn('cellphone', 'varchar', (col) => col.notNull())
    .addColumn('names', 'varchar')
    .addColumn('first_lastname', 'varchar')
    .addColumn('second_lastname', 'varchar')
    .addColumn('created_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull(),
    )
    .addColumn('updated_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull(),
    )
    .execute();
};

export const down: Migration['down'] = async (db) => {
  await db.schema.dropTable('client_profile').execute();
};
