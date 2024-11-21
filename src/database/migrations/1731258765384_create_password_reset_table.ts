import { Migration, sql } from 'kysely';

export const up: Migration['up'] = async (db) => {
  await db.schema
    .createTable('password_reset')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('user_run', 'integer', (col) =>
      col.references('user.run').onDelete('cascade').unique().notNull(),
    )
    .addColumn('token', 'varchar', (col) => col.notNull())
    .addColumn('expires_at', 'timestamp', (col) => col.notNull())
    .addColumn('created_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull(),
    )
    .execute();
};

export const down: Migration['down'] = async (db) => {};
