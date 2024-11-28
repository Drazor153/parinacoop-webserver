import { Module } from '@nestjs/common';

import { RegionRepository } from '../domain/ports/region.repository';
import { CommuneRepository } from '../domain/ports/commune.repository';

import {
  GetCommunesByRegionIdUseCase,
  GetRegionsUseCase,
} from '../application';

import { GetCommunesByRegionIdController, GetRegionsController } from './http';

import { PostgresRegionRepository } from './repositories/postgres.region-repository';
import { PostgresCommuneRepository } from './repositories/postgres.commune-repository';

@Module({
  controllers: [GetRegionsController, GetCommunesByRegionIdController],
  providers: [
    GetRegionsUseCase,
    GetCommunesByRegionIdUseCase,
    {
      provide: RegionRepository,
      useClass: PostgresRegionRepository,
    },
    {
      provide: CommuneRepository,
      useClass: PostgresCommuneRepository,
    },
  ],
})
export class LocationModule {}
