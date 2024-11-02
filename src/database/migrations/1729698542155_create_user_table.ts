import { Kysely, sql } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('user')
    .addColumn('run', 'integer', (col) => col.primaryKey())
    .addColumn('email', 'varchar', (col) => col.notNull().unique())
    .addColumn('names', 'varchar')
    .addColumn('first_lastname', 'varchar')
    .addColumn('second_lastname', 'varchar')
    .addColumn('cellphone', 'integer')
    .addColumn('password', 'varchar', (col) => col.notNull())
    .addColumn('password_attempts', 'integer', (col) => col.defaultTo(3))
    .addColumn('role', 'numeric', (col) => col.notNull())
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
