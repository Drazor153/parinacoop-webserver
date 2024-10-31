import { Injectable } from '@nestjs/common';
import { RegionRepository } from './domain/region.repository';
import { Region } from './domain/region';

@Injectable()
export class RegionsService {
  constructor(private readonly regionRepository: RegionRepository) {}
  public async create(): Promise<number> {
    return 0;
  }

  public async findAll(): Promise<Region[]> {
    return this.regionRepository.findAll();
  }
}
