import {
  HttpStatus,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';

import { NullableType } from '@/utils/types/nullable.type';
import { HashingService } from '@/common/providers';
import { RolesEnum } from '@/roles/roles.enum';

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

  async create(createUserDto: CreateUserDto): Promise<{ user: PrimitiveUser }> {
    const newUser = User.create({
      run: createUserDto.run,
      documentNumber: createUserDto.documentNumber,
      email: createUserDto.email,
      password: await this.hashingService.hash(createUserDto.password),
      role: RolesEnum.User,
    });

    try {
      await this.userRepository.create(newUser);
      return { user: newUser.toValue() };
    } catch (error) {
      const valueObject = newUser.toValue();
      const errors: {
        run?: string;
        email?: string;
        documentNumber?: string;
        cellphone?: string;
        other?: string;
      } = {};

      switch (error.constraint) {
        case 'user_pkey':
          errors.run = `User with run ${valueObject.run} already exists`;
          break;
        case 'user_email_key':
          errors.email = `User with email ${valueObject.email} already exists`;
          break;
        case 'user_document_number_key':
          errors.documentNumber = `User with document number ${valueObject.documentNumber} already exists`;
          break;
        case 'user_cellphone_key':
          errors.cellphone = `User with cellphone ${valueObject.cellphone} already exists`;
          break;
        default:
          errors.other = error.detail;
          break;
      }

      throw new UnprocessableEntityException({
        statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        errors,
      });
    }
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
