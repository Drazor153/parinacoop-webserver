import { Insertable, Selectable, Updateable } from 'kysely';

export interface RegionTable {
  id: string;
  name: string;
  abbr: string;
}

export type Region = Selectable<RegionTable>;
export type NewRegion = Insertable<RegionTable>;
export type RegionUpdate = Updateable<RegionTable>;
