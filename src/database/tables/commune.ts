import { Insertable, Selectable, Updateable } from 'kysely';

export interface CommuneTable {
  id: number;
  name: string;
  region_id: string;
}

export type Commune = Selectable<CommuneTable>;
export type NewCommune = Insertable<CommuneTable>;
export type CommuneUpdate = Updateable<CommuneTable>;
