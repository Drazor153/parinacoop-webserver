import { Injectable, UnauthorizedException } from '@nestjs/common';
import { deconstructRut } from '@fdograph/rut-utilities';

import { NullableType } from '@/utils/types/nullable.type';

import { User } from './domain/user';
import { UserRepository } from './domain/user.repository';
import { CreateClientDto } from './dto/create-client.dto';
import { Role } from '@/roles/roles.enum';
import { HashingService } from '@/common/providers';
import { Address } from './domain/address';
import { Profile } from './domain/profile';
import { CreateAdminDto } from './dto/create-admin.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hashingService: HashingService,
  ) {}

  findByRun(run: number): Promise<NullableType<User>> {
    return this.userRepository.findByRun(run);
  }

  async getProfile(run: number): Promise<User> {}

  async createClient(createClientDto: CreateClientDto): Promise<User> {
    const { digits } = deconstructRut(createClientDto.run);
    const newClient = new User({
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
    });

    return this.userRepository.create(newClient);
  }

  async firstAdmin(createAdminDto: CreateAdminDto): Promise<User> {
    const adminQuantity = await this.userRepository.findByRole(Role.ADMIN);
    if (adminQuantity.length > 0) {
      throw new UnauthorizedException(
        'No está autorizado para crear más de un administrador',
      );
    }
    const { digits } = deconstructRut(createAdminDto.run);
    const newAdmin = new User({
      run: +digits,
      role: Role.ADMIN,
      password: await this.hashingService.hash(createAdminDto.password),
    });

    return this.userRepository.create(newAdmin);

    // return this.userRepository.create(newAdmin);
  }
}
