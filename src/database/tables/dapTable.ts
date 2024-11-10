import { Generated } from 'kysely';

export interface DapTable {
  id: Generated<number>;
  user_run: number;
  type: string;
  currency_type: string;
  status: string;
  days: number;
  initial_date: Date;
  initial_amount: number;
  due_date: Date;
  final_amount: number;
  profit: number;
  interest_rate: number;
}
