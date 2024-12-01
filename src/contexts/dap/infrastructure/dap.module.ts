import { Module } from '@nestjs/common';

import { CreateDapUseCase, SimulateDapUseCase } from '../application';

import { DapRepository } from '../domain/ports/dap.repository';

import { CreateDapController, SimulateDapController } from './http';
import { PostgreSqlDapRepository } from './repositories/postgresql.dap-repository';

@Module({
  controllers: [CreateDapController, SimulateDapController],
  providers: [
    CreateDapUseCase,
    SimulateDapUseCase,
    {
      provide: DapRepository,
      useClass: PostgreSqlDapRepository,
    },
  ],
})
export class DapModule {}
