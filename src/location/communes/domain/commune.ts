export interface PrimitiveCommune {
  id: number;
  name: string;
  postalCode: number;
  regionId: number;
}

export class Commune {
  constructor(private attributes: PrimitiveCommune) {}

  static create(createCommune: {
    name: string;
    postalCode: number;
    regionId: number;
  }): Commune {
    return new Commune({
      id: -1,
      name: createCommune.name,
      postalCode: createCommune.postalCode,
      regionId: createCommune.regionId,
    });
  }

  toValue(): PrimitiveCommune {
    return this.attributes;
  }

  set id(value: number) {
    this.attributes.id = value;
  }
}
