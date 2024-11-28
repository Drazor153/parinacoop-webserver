import { GetRegionsUseCase } from '@/contexts/location/application/get-regions-use-case/get-regions.use-case';
import { PrimitiveRegion } from '@/contexts/location/domain/models/Region';
import { Controller, Get } from '@nestjs/common';

@Controller('regions')
export class GetRegionsController {
  constructor(private getRegionsUseCase: GetRegionsUseCase) {}

  @Get()
  async run(): Promise<{ regions: PrimitiveRegion[] }> {
    return this.getRegionsUseCase.execute({});
  }
}
