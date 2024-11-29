import { Module } from '@nestjs/common';
import { GetProfileController } from './http/get-profile.controller';
import { GetProfileUseCase } from '../application/get-profile-use-case/get-profile.use-case';
import { ClientRepository } from '../domain/ports/client.repository';
import { PostgreSqlClientRepository } from './repositories/postgresql.client-repository';

@Module({
  controllers: [GetProfileController],
  providers: [
    GetProfileUseCase,
    {
      provide: ClientRepository,
      useClass: PostgreSqlClientRepository,
    },
  ],
})
export class ClientProfileModule {}
