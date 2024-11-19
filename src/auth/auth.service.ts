import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { HashingService } from '@/common/providers';
import { UsersService } from '@/users/users.service';

import { LoginDto } from './dto/login.dto';
import { LoginResponse } from './interfaces/login-response';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly hashingService: HashingService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto): Promise<LoginResponse> {
    const user = await this.usersService.findByRun(loginDto.run);

    if (!user) {
      throw new UnauthorizedException('Las credenciales no son correctas.');
    }

    const isPasswordValid = await this.hashingService.compare(
      loginDto.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Las credenciales no son correctas.');
    }

    const payload = { run: user.run, role: user.role };

    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }

}
