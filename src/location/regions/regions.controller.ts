import { Controller, HttpException, Post, HttpStatus } from '@nestjs/common';
import { RegionsService } from './regions.service';
import { LocationService } from '@/common/providers';

@Controller('regions')
export class RegionsController {
  constructor(
    private readonly regionsService: RegionsService,
    private readonly locationService: LocationService,
  ) {}

  @Post()
  async initializeRegions(): Promise<string> {
    const regions = await this.regionsService.findAll();
    if (regions.length > 0) {
      throw new HttpException(
        'Regions already intialized',
        HttpStatus.BAD_REQUEST,
      );
    }
    return 'Regions initialized';
    // const locations = this.locationService.getRegionsCommunes();
  }
}
