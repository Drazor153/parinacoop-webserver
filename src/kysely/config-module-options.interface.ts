import { Kysely } from "kysely";


export interface ConfigModuleOptions{
    database: Kysely<any>
}
