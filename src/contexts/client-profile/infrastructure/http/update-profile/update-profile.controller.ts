import { ApiBearerAuth } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Patch,
  UseGuards,
} from '@nestjs/common';

import { UpdateProfileUseCase } from '@/contexts/client-profile/application/update-profile/update-profile.use-case';
import { AuthGuard } from '@/contexts/shared/guards/auth.guard';

import { UpdateProfileDtoHttp } from './update-profile.dto-http';

@Controller('profile')
@UseGuards(AuthGuard)
export class UpdateProfileController {
  constructor(private updateProfileUseCase: UpdateProfileUseCase) {}

  @ApiBearerAuth()
  @Patch(':run')
  async run(
    @Param('run', ParseIntPipe) run: number,
    @Body() dtoHttp: UpdateProfileDtoHttp,
  ): Promise<{ msg: string }> {
    return await this.updateProfileUseCase.execute({ ...dtoHttp, run });
  }
}
