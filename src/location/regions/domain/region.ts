export interface PrimitiveRegion {
  id: number;
  name: string;
  romanNumber: string;
  number: number;
  abbreviation: string;
}
export class Region {
  constructor(private attributes: PrimitiveRegion) {}

  static create(createRegion: PrimitiveRegion): Region {
    return new Region(createRegion);
  }

  toValue(): PrimitiveRegion {
    return this.attributes;
  }
}
