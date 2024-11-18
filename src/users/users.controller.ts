import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@/auth/auth.guard';
import { FastifyRequest } from 'fastify';
import { User } from '@/utils/decorators/user.decorator';
import { UserRequest } from '@/utils/interfaces/user-request.interface';
import { Roles } from '@/roles/roles.decorator';
import { RolesEnum } from '@/roles/roles.enum';

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('profile')
  @Roles(RolesEnum.ADMIN)
  getProfile(@User() user: UserRequest) {
    return this.usersService.findByRun(user.run);
  }
}
