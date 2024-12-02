import { Module } from '@nestjs/common';

import {
  CreateDapUseCase,
  GetDapsUseCase,
  SimulateDapUseCase,
} from '../application';

import { DapRepository } from '../domain/ports/dap.repository';

import {
  CreateDapController,
  GetDapsController,
  SimulateDapController,
} from './http';
import { PostgreSqlDapRepository } from './repositories/postgresql.dap-repository';

@Module({
  controllers: [CreateDapController, SimulateDapController, GetDapsController],
  providers: [
    CreateDapUseCase,
    SimulateDapUseCase,
    GetDapsUseCase,
    {
      provide: DapRepository,
      useClass: PostgreSqlDapRepository,
    },
  ],
})
export class DapModule {}
