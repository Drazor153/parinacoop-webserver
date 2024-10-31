import { Module } from '@nestjs/common';
import { RegionsService } from './regions.service';
import { RegionsController } from './regions.controller';
import { RegionRepository } from './domain/region.repository';
import { RegionPostgresRepository } from './region.repository';
import { CommunesModule } from '../communes/communes.module';

@Module({
  imports: [CommunesModule],
  controllers: [RegionsController],
  providers: [
    RegionsService,
    {
      provide: RegionRepository,
      useClass: RegionPostgresRepository,
    },
  ],
})
export class RegionsModule {}
