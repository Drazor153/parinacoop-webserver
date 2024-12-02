import { Migration, sql } from 'kysely';

export const up: Migration['up'] = async (db) => {
  await db.schema
    .createTable('dap')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('user_run', 'integer', (col) =>
      col.references('user.run').onDelete('cascade').notNull(),
    )
    .addColumn('type', 'varchar', (col) => col.notNull())
    .addColumn('currency_type', 'varchar', (col) => col.notNull())
    .addColumn('status', 'varchar', (col) => col.notNull())
    .addColumn('days', 'smallint', (col) => col.notNull())
    .addColumn('initial_date', 'date', (col) => col.notNull())
    .addColumn('initial_amount', 'integer', (col) =>
      col.notNull().check(sql`"initial_amount" >= 50000`),
    )
    .addColumn('due_date', 'date', (col) => col.notNull())
    .addColumn('final_amount', 'integer', (col) => col.notNull())
    .addColumn('profit', 'integer', (col) => col.notNull())
    .addColumn('interest_rate', 'decimal', (col) => col.notNull())

    .execute();
};

export const down: Migration['down'] = async (db) => {
  await db.schema.dropTable('dap').execute();
};
