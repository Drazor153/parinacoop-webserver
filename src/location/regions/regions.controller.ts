import {
  Controller,
  HttpException,
  Post,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { LocationService } from '@/common/providers';

import { RegionsService } from './regions.service';
import { CommunesService } from '../communes/communes.service';

@Controller('regions')
export class RegionsController {
  constructor(
    private readonly regionsService: RegionsService,
    private readonly locationService: LocationService,
    private readonly communesService: CommunesService,
  ) {}

  @Post()
  @HttpCode(201)
  async initializeRegions(): Promise<string> {
    const regions = await this.regionsService.findAll();
    if (regions.length > 0) {
      throw new HttpException(
        'Regions already intialized',
        HttpStatus.BAD_REQUEST,
      );
    }
    const locations = await this.locationService.getRegionsCommunes();
    for (const location of locations) {
      const newRegion = await this.regionsService.create({
        name: location.name,
        number: location.number,
        abbreviation: location.abbreviation,
        romanNumber: location.romanNumber,
      });

      for (const commune of location.communes) {
        await this.communesService.create({
          name: commune.name,
          postalCode: commune.postalCode,
          regionId: newRegion.id,
        });
      }
    }
    return 'Regions initialized';
  }
}
