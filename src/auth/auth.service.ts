import {
  HttpStatus,
  Injectable,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { HashingService } from '@/common/providers';
import { UsersService } from '@/users/users.service';

import { LoginDto } from './dto/login.dto';
import { LoginResponse } from './interfaces/login-response';
import { RegisterDto } from './dto/register.dto';
import { RegisterResponse } from './interfaces/register-response';

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

  async register(registerDto: RegisterDto): Promise<RegisterResponse> {
    const errors: {
      run?: string;
      email?: string;
      documentNumber?: string;
    } = {};
    const userExists = await this.usersService.existsByRun(registerDto.run);
    if (userExists) {
      errors.run = 'Run already exists';
    }
    const emailExists = await this.usersService.existsByEmail(
      registerDto.email,
    );
    if (emailExists) {
      errors.email = 'Email already exists';
    }
    const documentNumberExists = await this.usersService.existsByDocumentNumber(
      registerDto.documentNumber,
    );
    if (documentNumberExists) {
      errors.documentNumber = 'Document number already exists';
    }
    if (Object.keys(errors).length) {
      throw new UnprocessableEntityException(errors);
    }

    await this.usersService.create({
      ...registerDto,
      password: await this.hashingService.hash(registerDto.password),
    });
    return {
      message: 'User created',
    };
  }
}
