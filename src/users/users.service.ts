import {
  HttpStatus,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';

import { NullableType } from '@/utils/types/nullable.type';
import { HashingService } from '@/common/providers';

import { PrimitiveUser, User } from './domain/user';
import { UserRepository } from './domain/user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RolesEnum } from '@/roles/roles.enum';

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hashingService: HashingService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<{ user: PrimitiveUser }> {
    const existingUser = await this.findByRun(createUserDto.run);
    if (existingUser) {
      throw new UnprocessableEntityException({
        statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        errors: {
          run: `User with run ${createUserDto.run} already exists`,
        },
      });
    }

    const existingEmail = await this.findByEmail(createUserDto.email);
    if (existingEmail) {
      throw new UnprocessableEntityException({
        statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        errors: {
          email: `User with email ${createUserDto.email} already exists`,
        },
      });
    }

    const newUser = User.create({
      run: createUserDto.run,
      email: createUserDto.email,
      password: await this.hashingService.hash(createUserDto.password),
      role: RolesEnum.User,
    });
    await this.userRepository.create(newUser);

    return { user: newUser.toValue() };
  }

  async findByRun(run: number): Promise<{ user: NullableType<PrimitiveUser> }> {
    const result = await this.userRepository.findByRun(run);
    return { user: result?.toValue() ?? null };
  }

  async findByEmail(
    email: string,
  ): Promise<{ user: NullableType<PrimitiveUser> }> {
    const result = await this.userRepository.findByEmail(email);
    return { user: result?.toValue() ?? null };
  }

  update(run: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${run} user`;
  }
}
