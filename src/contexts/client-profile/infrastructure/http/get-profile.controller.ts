import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { GetProfileUseCase } from '../../application/get-profile-use-case/get-profile.use-case';

@Controller('profile')
export class GetProfileController {
  constructor(private getProfileUseCase: GetProfileUseCase) {}

  @Get(':run')
  async run(@Param('run', ParseIntPipe) run: number) {
    return this.getProfileUseCase.execute({ run });
  }
}
