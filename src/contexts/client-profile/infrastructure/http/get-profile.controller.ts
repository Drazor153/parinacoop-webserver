import {
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  ParseIntPipe,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { GetProfileUseCase } from '../../application/get-profile-use-case/get-profile.use-case';
import { ClientNotFoundError } from '../../domain/client-not-found.exception';
import { PrimitiveClient } from '../../domain/models/Client';
import { AuthGuard } from '@/contexts/shared/guards/auth.guard';
import { User } from '@/contexts/shared/decorators/user.decorator';
import { UserRequest } from '@/utils/interfaces/user-request.interface';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';

@Controller('profile')
@UseGuards(AuthGuard)
export class GetProfileController {
  constructor(private getProfileUseCase: GetProfileUseCase) {}

  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Perfil de cliente encontrado',
  })
  @Get(':run')
  async run(
    @User() user: UserRequest,
    @Param('run', ParseIntPipe) run: number,
  ): Promise<{ profile: PrimitiveClient } | undefined> {
    if (user.run !== run) {
      throw new UnauthorizedException('No tiene permitido ver este perfil');
    }
    try {
      return await this.getProfileUseCase.execute({ run });
    } catch (error) {
      if (error instanceof ClientNotFoundError) {
        throw new NotFoundException(error.message);
      }
      console.error(error);
    }
  }
}
