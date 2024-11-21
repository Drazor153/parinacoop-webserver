import { Module } from '@nestjs/common';

import { LocationController } from './location.controller';
import { LocationService } from './location.service';
import { RegionRepository } from './domain/region.repository';
import { RegionPostgresRepository } from './persistence/region.repository';

@Module({
  controllers: [LocationController],
  providers: [
    LocationService,
    {
      provide: RegionRepository,
      useClass: RegionPostgresRepository,
    },
  ],
})
export class LocationModule {}
