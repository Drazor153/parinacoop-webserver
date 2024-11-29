import { LoginUseCase } from '@/contexts/auth/application/login-use-case/login.use-case';
import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginHttpDto } from './login.http-dto';
import { InvalidCredentialsException } from '@/contexts/auth/domain/invalid-credentials.exception';
import { ApiResponse } from '@nestjs/swagger';

@Controller('auth')
export class LoginController {
  constructor(private loginUseCase: LoginUseCase) {}

  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Al iniciar sesión correctamente, se obtiene un access_token',
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Las credenciales son incorrectas',
  })
  @Post('login')
  async run(
    @Body() loginHttpDto: LoginHttpDto,
  ): Promise<{ accessToken: string } | undefined> {
    try {
      return await this.loginUseCase.execute(loginHttpDto);
    } catch (error) {
      if (error instanceof InvalidCredentialsException) {
        throw new UnauthorizedException('Las credenciales no son correctas.');
      }
    }
  }
}
