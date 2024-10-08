import { UserRepository } from '@/users/domain/user.repository';
import { Module } from '@nestjs/common';
import { UserPostgresRepository } from './user.repository';
import { KyselyModule } from '@/kysely/kysely.module';

@Module({
  imports: [KyselyModule],
  providers: [
    {
      provide: UserRepository,
      useClass: UserPostgresRepository,
    },
  ],
  exports: [UserRepository],
})
export class PostgresUserModule {}
