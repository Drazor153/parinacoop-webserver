import { Migration, sql } from 'kysely';

export const up: Migration['up'] = async (db) => {
  await db.schema
    .createTable('user_session')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('user_run', 'integer', (col) =>
      col.references('user.run').onDelete('cascade').unique().notNull(),
    )
    .addColumn('login_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull(),
    )
    .addColumn('logout_at', 'timestamp')
    .addColumn('ip_address', sql`inet`, (col) => col.notNull())
    .addColumn('user_agent', 'varchar', (col) => col.notNull())
    .execute();
};

export const down: Migration['down'] = async (db) => {
  await db.schema.dropTable('user_session').execute();
};
