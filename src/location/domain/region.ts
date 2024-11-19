import { Commune, PersistenceCommune } from './commune';

export interface PrimitiveRegion {
  id: number;
  name: string;
  romanNumber: string;
  number: number;
  abbreviation: string;
  communes: Commune[];
}

export interface PersistenceRegion {
  id: number;
  name: string;
  roman_number: string;
  number: number;
  abbreviation: string;
  communes: PersistenceCommune[];
}

export class Region {
  constructor(private attributes: PrimitiveRegion) {}

  toDomain() {
    return {
      id: this.attributes.id,
      name: this.attributes.name,
      romanNumber: this.attributes.romanNumber,
      number: this.attributes.number,
      abbreviation: this.attributes.abbreviation,
      communes: this.attributes.communes.map((commune) => commune.toDomain()),
    };
  }

  toPersistence(): PersistenceRegion {
    return {
      id: this.attributes.id,
      name: this.attributes.name,
      roman_number: this.attributes.romanNumber,
      number: this.attributes.number,
      abbreviation: this.attributes.abbreviation,
      communes: this.attributes.communes.map((commune) =>
        commune.toPersistence(),
      ),
    };
  }
}
