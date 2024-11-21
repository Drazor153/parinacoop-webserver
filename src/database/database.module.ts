import { Global, Module } from '@nestjs/common';
import {
  ConfigurableDatabaseModule,
  DATABASE_OPTIONS,
} from './database.module-definition';
import { Database } from './database';
import { DatabaseOptions } from './databaseOptions';
import { PostgresDialect } from 'kysely';
import { Pool } from 'pg';

@Global()
@Module({
  exports: [Database],
  providers: [
    {
      provide: Database,
      inject: [DATABASE_OPTIONS],
      useFactory: (databaseOptions: DatabaseOptions) => {
        const dialect = new PostgresDialect({
          pool: new Pool({
            database: databaseOptions.database,
            host: databaseOptions.host,
            user: databaseOptions.user,
            port: databaseOptions.port,
            password: databaseOptions.password,
            max: 10,
          }),
        });

        return new Database({
          dialect,
        });
      },
    },
  ],
})
export class DatabaseModule extends ConfigurableDatabaseModule {}
