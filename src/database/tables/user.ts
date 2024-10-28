import { Insertable, Selectable, Updateable } from 'kysely';

export interface UserTable {
    run: number
    email: string
    names: string
    first_lastname: string
    second_lastname: string
    cellphone: number
    password: string
    password_attempts: number
    created_at: number
    updated_at: number
}

export type User = Selectable<UserTable>;
export type NewUser = Insertable<UserTable>;
export type UserUpdate = Updateable<UserTable>;
