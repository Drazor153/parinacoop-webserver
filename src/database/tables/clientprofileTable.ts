import { Generated } from 'kysely';

export interface ClientProfileTable {
  id: Generated<number>;
  user_run: number;
  document_number: number;
  email: string;
  names: string;
  first_lastname: string;
  second_lastname: string;
  cellphone: number;
  created_at: number;
  updated_at: number;
}
