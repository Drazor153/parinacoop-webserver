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

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hashingService: HashingService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<PrimitiveUser> {
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
    });
    await this.userRepository.create(newUser);

    return newUser.toValue();
  }

  async findByRun(run: number): Promise<NullableType<PrimitiveUser>> {
    const result = await this.userRepository.findByRun(run);
    return result?.toValue();
  }

  async findByEmail(email: string): Promise<NullableType<PrimitiveUser>> {
    const result = await this.userRepository.findByEmail(email);
    return result?.toValue();
  }

  update(run: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${run} user`;
  }
}
