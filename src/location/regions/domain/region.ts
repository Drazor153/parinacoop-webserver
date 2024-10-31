export interface PrimitiveRegion {
  id: number;
  name: string;
  romanNumber: string;
  number: number;
  abbreviation: string;
}
export class Region {
  constructor(private attributes: PrimitiveRegion) {}

  static create(createRegion: {
    name: string;
    romanNumber: string;
    number: number;
    abbreviation: string;
  }): Region {
    return new Region({
      ...createRegion,
      id: -1,
    });
  }

  toValue(): PrimitiveRegion {
    return this.attributes;
  }

  set id(value: number) {
    this.attributes.id = value;
  }
}
