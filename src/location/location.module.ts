import { Module } from '@nestjs/common';
import { RegionsModule } from './regions/regions.module';
import { CommunesModule } from './communes/communes.module';

@Module({
    imports: [RegionsModule, CommunesModule]
})
export class LocationModule {}
