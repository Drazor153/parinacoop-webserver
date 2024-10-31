import { Module } from '@nestjs/common';

import { CommunesService } from './communes.service';
import { CommunesController } from './communes.controller';
import { CommuneRepository } from './domain/commune.repository';
import { CommunePostgresRepository } from './commune.repository';

@Module({
  controllers: [CommunesController],
  providers: [
    CommunesService,
    {
      provide: CommuneRepository,
      useClass: CommunePostgresRepository,
    },
  ],
  exports: [CommunesService],
})
export class CommunesModule {}
