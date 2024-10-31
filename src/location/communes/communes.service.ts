import { Injectable } from '@nestjs/common';
import { CommuneRepository } from './domain/commune.repository';
import { Commune, PrimitiveCommune } from './domain/commune';
import { CreateCommuneDTO } from './dto/create-commune.dto';

@Injectable()
export class CommunesService {
  constructor(private readonly communeRepository: CommuneRepository) {}

  public async create(
    createCommuneDto: CreateCommuneDTO,
  ): Promise<PrimitiveCommune> {
    const newCommune = Commune.create(createCommuneDto);

    await this.communeRepository.create(newCommune);
    return newCommune.toValue();
  }
}
