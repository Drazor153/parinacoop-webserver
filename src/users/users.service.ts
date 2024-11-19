import { Injectable } from '@nestjs/common';
import { deconstructRut } from '@fdograph/rut-utilities';

import { NullableType } from '@/utils/types/nullable.type';

import { User } from './domain/user';
import { UserRepository } from './domain/user.repository';
import { CreateClientDto } from './dto/create-client.dto';
import { Role } from '@/roles/roles.enum';
import { HashingService } from '@/common/providers';
import { Address } from './domain/address';
import { Profile } from './domain/profile';

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hashingService: HashingService,
  ) {}

  async createClient(createClientDto: CreateClientDto): Promise<User> {
    const { digits } = deconstructRut(createClientDto.run);
    return this.userRepository.create(
      new User({
        run: +digits,
        role: Role.CLIENT,
        password: await this.hashingService.hash(createClientDto.password),
        address: new Address({
          typeAddress: createClientDto.typeAddress,
          street: createClientDto.street,
          number: createClientDto.number,
          detail: createClientDto.detail,
          communeId: createClientDto.communeId,
        }),
        profile: new Profile({
          names: createClientDto.names,
          firstLastName: createClientDto.firstLastName,
          secondLastName: createClientDto.secondLastName,
          email: createClientDto.email,
          cellphone: createClientDto.cellphone,
          documentNumber: createClientDto.documentNumber,
        }),
      }),
    );
  }

  async findByRun(run: number): Promise<NullableType<User>> {
    return await this.userRepository.findByRun(run);
  }
}
