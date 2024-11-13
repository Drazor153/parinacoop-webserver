import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserRepository } from './domain/user.repository';
import { UserPostgresRepository } from './persistence/user.repository';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: UserRepository,
      useClass: UserPostgresRepository,
    },
  ],
  exports: [UsersService],
})
export class UsersModule {}
