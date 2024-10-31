import { Injectable } from '@nestjs/common';

import { Region, regions_communes } from '@/utils/consts/regions';

@Injectable()
export class LocationService {
  public async getRegionsCommunes(): Promise<Region[]> {
    return regions_communes;
  }
}
