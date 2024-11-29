import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';

import { AuthGuard } from '@/contexts/shared/guards/auth.guard';
import { User } from '@/contexts/shared/decorators/user.decorator';
import { UserRequest } from '@/utils/interfaces/user-request.interface';
import { Roles } from '@/roles/roles.decorator';
import { Role } from '@/contexts/shared/enums/roles.enum';
import { RolesGuard } from '@/roles/roles.guard';

import { UsersService } from './users.service';
import { CreateClientDto } from './dto/create-client.dto';
import { CreateAdminDto } from './dto/create-admin.dto';
import { Public } from '@/contexts/shared/decorators/public.decorator';

@Controller('users')
@UseGuards(AuthGuard, RolesGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('profile/:run')
  @Roles(Role.ADMIN, Role.CLIENT)
  getClientProfile(
    @User() user: UserRequest,
    @Param('run', ParseIntPipe) run: number,
  ) {
    if (user.role === Role.CLIENT && user.run !== run) {
      throw new UnauthorizedException(
        'No está autorizado para ver este perfil',
      );
    }
    return this.usersService.getClientProfile(run);
  }

  @Post()
  @Roles(Role.ADMIN)
  createClient(@Body() createClientDto: CreateClientDto) {
    return this.usersService.createClient(createClientDto);
  }

  @Post('admin')
  @Public()
  firstAdmin(@Body() createAdminDto: CreateAdminDto) {
    return this.usersService.firstAdmin(createAdminDto);
  }
}
