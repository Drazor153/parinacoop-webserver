import { Migration, sql } from 'kysely';

export const up: Migration['up'] = async (db) => {
  db.schema
    .alterTable('dap')
    .dropColumn('interest_rate')
    .addColumn('interest_rate_in_period', 'decimal', (col) => col.notNull())
    .addColumn('interest_rate_in_month', 'decimal', (col) => col.notNull())
    .execute();
};

export const down: Migration['down'] = async (db) => {
  db.schema
    .alterTable('dap')
    .dropColumn('interest_rate_in_period')
    .dropColumn('interest_rate_in_month')
    .addColumn('interest_rate', 'decimal', (col) => col.notNull())
    .execute();
};
