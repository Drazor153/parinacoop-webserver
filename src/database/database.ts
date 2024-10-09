import { Kysely } from "kysely";
import { UserTable } from "./tables/user";

export interface Tables{
    user: UserTable
}
export class Database extends Kysely<Tables>{}