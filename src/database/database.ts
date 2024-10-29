import { Kysely } from 'kysely';
import { UserTable } from './tables/user';
import { RegionTable } from './tables/region';
import { CommuneTable } from './tables/commune';

export interface Tables {
  user: UserTable;
  region: RegionTable;
  commune: CommuneTable;
}
export class Database extends Kysely<Tables> {}
