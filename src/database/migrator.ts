import { writeFile } from 'fs/promises';
import { join } from 'path';
async function makeMigration() {
  const args = process.argv.slice(2);

  const migrationsPath = './migrations';
  const migrationName = args[0].replace(' ', '_');
  const now = Date.now();

  await writeFile(
    join(__dirname, migrationsPath, `${now}_${migrationName}.ts`),
`import { Kysely, sql } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  
}

export async function down(db: Kysely<any>): Promise<void> {
  
}

`,
  );
}

makeMigration();
