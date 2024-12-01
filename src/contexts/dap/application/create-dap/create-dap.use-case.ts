import { Injectable } from '@/contexts/shared/dependency-injection/injectable';
import { DapRepository } from '../../domain/ports/dap.repository';
import { Dap, PrimitiveDap } from '../../domain/models/Dap';
import { CreateDapDto } from './create-dap.dto';
import { SDap } from '../../domain/models/SDap';

@Injectable()
export class CreateDapUseCase {
  constructor(private dapRepository: DapRepository) {}

  async execute(dto: CreateDapDto): Promise<{ dap: PrimitiveDap }> {
    const simulatedDap = SDap.create({
      days: dto.days,
      initialAmount: dto.initialAmount,
      initialDate: Date.now(),
      interestRateBase: 3.94 / 100,
      currencyType: dto.currencyType,
      type: dto.type,
    });
    const newDap = await this.dapRepository.create(
      Dap.create(dto.userRun, simulatedDap),
    );

    return { dap: newDap.toValue() };
  }
}
