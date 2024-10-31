import { Generated, Insertable, Selectable, Updateable } from 'kysely';

export interface RegionTable {
  id: Generated<number>;
  name: string;
  roman_number: string;
  number: number;
  abbreviation: string;
}

export type Region = Selectable<RegionTable>;
export type NewRegion = Insertable<RegionTable>;
export type RegionUpdate = Updateable<RegionTable>;
