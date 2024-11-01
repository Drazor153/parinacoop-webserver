import { Injectable } from '@nestjs/common';

import { RegionRepository } from './domain/region.repository';
import { PrimitiveRegion, Region } from './domain/region';
import { CreateRegionDTO } from './dto/create-region.dto';

@Injectable()
export class RegionsService {
  constructor(private readonly regionRepository: RegionRepository) {}

  public async create(
    createRegionDto: CreateRegionDTO,
  ): Promise<PrimitiveRegion> {
    const newRegion = Region.create(createRegionDto);

    await this.regionRepository.create(newRegion);

    return newRegion.toValue();
  }

  public async findAll(): Promise<Region[]> {
    return this.regionRepository.findAll();
  }
}
