import { SimulateDapUseCase } from '@/contexts/dap/application';
import { PrimitiveSDap } from '@/contexts/dap/domain/models/SDap';
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { SimulateDapDto } from './simulate-dap.http-dto';

@Controller('dap')
export class SimulateDapController {
  constructor(private simulateDapUseCase: SimulateDapUseCase) {}

  @HttpCode(HttpStatus.OK)
  @Post('simulate')
  async run(@Body() httpDto: SimulateDapDto): Promise<{ sDaps: PrimitiveSDap[] }> {
    return await this.simulateDapUseCase.run(httpDto);
  }
}
