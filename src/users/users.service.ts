import { Injectable } from '@nestjs/common';

import { NullableType } from '@/utils/types/nullable.type';
import { Role } from '@/roles/roles.enum';

import { User } from './domain/user';
import { UserRepository } from './domain/user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.userRepository.create(
      new User({
        run: createUserDto.run,
        document_number: createUserDto.documentNumber,
        email: createUserDto.email,
        profile_id: -1,
        password: createUserDto.password,
        role: Role.CLIENT,
        cellphone: createUserDto.cellphone,
      }),
    );
  }

  async findByRun(run: number): Promise<NullableType<User>> {
    return await this.userRepository.findByRun(run);
  }

  async existsByRun(run: number): Promise<boolean> {
    return await this.userRepository.existsByRun(run);
  }

  async existsByEmail(email: string): Promise<boolean> {
    return await this.userRepository.existsByEmail(email);
  }

  async existsByDocumentNumber(documentNumber: number): Promise<boolean> {
    return await this.userRepository.existsByDocumentNumber(documentNumber);
  }
}
