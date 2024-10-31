import { Insertable, Selectable, Updateable } from 'kysely';

export interface CommuneTable {
  id: number;
  name: string;
  postal_code: number;
  region_id: number;
}

export type Commune = Selectable<CommuneTable>;
export type NewCommune = Insertable<CommuneTable>;
export type CommuneUpdate = Updateable<CommuneTable>;
