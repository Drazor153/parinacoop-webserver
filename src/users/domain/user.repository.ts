import { NullableType } from "@/utils/types/nullable.type";
import { User } from "./user";

export abstract class UserRepository{
    abstract create(): Promise<User>
    abstract findByRun(run: User['run']): Promise<NullableType<User>>
}