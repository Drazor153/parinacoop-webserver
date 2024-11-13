import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@/auth/auth.guard';
import { FastifyRequest } from 'fastify';
import { User } from '@/utils/decorators/user.decorator';
import { UserRequest } from '@/utils/interfaces/user-request.interface';

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('profile')
  getProfile(@User() user: UserRequest) {
    return this.usersService.findByRun(user.run);
  }
}
