import { Injectable } from '@nestjs/common';
import { RegionRepository } from './domain/region.repository';

@Injectable()
export class LocationService {
  constructor(private regionRepository: RegionRepository) {}
}
