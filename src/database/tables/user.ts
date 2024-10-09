import { Insertable, Selectable, Updateable } from 'kysely';

export interface UserTable {
    run: number
    email: string
    password: string
}

export type User = Selectable<UserTable>;
export type NewUser = Insertable<UserTable>;
export type UserUpdate = Updateable<UserTable>;
