import { Kysely, sql } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('user')
    .addColumn('run', 'integer', (col) => col.primaryKey())
    .addColumn('document_number', 'integer', (col) => col.notNull().unique())
    .addColumn('email', 'varchar', (col) => col.notNull().unique())
    .addColumn('names', 'varchar')
    .addColumn('first_lastname', 'varchar')
    .addColumn('second_lastname', 'varchar')
    .addColumn('cellphone', 'integer', (col) => col.notNull())
    .addColumn('password', 'varchar', (col) => col.notNull())
    .addColumn('password_attempts', 'smallint', (col) => col.defaultTo(3))
    .addColumn('role', 'smallint', (col) => col.notNull())
    .addColumn('created_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull(),
    )
    .addColumn('updated_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull(),
    )
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('user').execute();
}
