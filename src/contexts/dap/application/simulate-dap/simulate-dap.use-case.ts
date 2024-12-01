import { Injectable } from '@/contexts/shared/dependency-injection/injectable';
import { SimulateDapDto } from './simulate-dap.dto';
import { PrimitiveSDap, SDap } from '../../domain/models/SDap';

@Injectable()
export class SimulateDapUseCase {
  constructor() {}

  async run(dto: SimulateDapDto): Promise<{ sDaps: PrimitiveSDap[] }> {
    const terms = [30, 60, 90, 120, 180, 365];
    const interestRate = 3.96 / 100; // 3.96% anual (360 días)
    const now = Date.now();

    const sDaps: SDap[] = terms.map((term) =>
      SDap.create({
        days: term,
        initialDate: now,
        initialAmount: dto.initialAmount,
        interestRateBase: interestRate,
        type: dto.type,
        currencyType: 'CLP',
      }),
    );

    return { sDaps: sDaps.map((sDap) => sDap.toValue()) };
  }
}
