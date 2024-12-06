import { Kysely } from 'kysely';
import { UserTable } from './tables/userTable';
import { RegionTable } from './tables/regionTable';
import { CommuneTable } from './tables/communeTable';
import { ClientProfileTable } from './tables/clientprofileTable';
import { AddressTable } from './tables/addressTable';
import { UserSessionTable } from './tables/usersessionTable';
import { PasswordResetTable } from './tables/passwordresetTable';
import { DapTable } from './tables/dapTable';
import { ParameterTable } from './tables/parameterTable';

export interface Tables {
  region: RegionTable;
  commune: CommuneTable;
  user: UserTable;
  client_profile: ClientProfileTable;
  address: AddressTable;
  user_session: UserSessionTable;
  password_reset: PasswordResetTable;
  dap: DapTable;
  parameter: ParameterTable;
}
export class Database extends Kysely<Tables> {}
