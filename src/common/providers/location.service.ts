import { Region, regions_communes } from '@/utils/consts/regions';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LocationService {
  public getRegionsCommunes(): Region[] {
    return regions_communes;
  }
}
