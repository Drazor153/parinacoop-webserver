import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserRepository } from './domain/user.repository';
import { UserPostgresRepository } from './user.repository';

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
