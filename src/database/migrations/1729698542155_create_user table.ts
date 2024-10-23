import { Kysely, sql } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable('user')
  .addColumn('run', 'integer', col => col.primaryKey())
  .addColumn('email', 'varchar', col => col.unique())
  .addColumn('names', 'varchar')
  .addColumn('first_lastname', 'varchar')
  .addColumn('second_lastname', 'varchar')
  .addColumn('cellphone', 'integer')
  .addColumn('password', 'varchar')
  .addColumn('created_at', 'date')
  .addColumn('updated_at', 'date')
  .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
  
}

