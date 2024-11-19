export interface PrimitiveCommune {
  id?: number;
  name: string;
  postalCode: number;
  regionId: number;
}

export interface PersistenceCommune {
  id?: number;
  name: string;
  postal_code: number;
  region_id: number;
}

export class Commune {
  constructor(private attributes: PrimitiveCommune) {}

  toDomain(): PrimitiveCommune {
    return this.attributes;
  }

  toPersistence(): PersistenceCommune {
    return {
      id: this.attributes.id,
      name: this.attributes.name,
      postal_code: this.attributes.postalCode,
      region_id: this.attributes.regionId,
    };
  }
}
