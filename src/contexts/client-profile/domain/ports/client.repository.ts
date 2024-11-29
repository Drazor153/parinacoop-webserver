import { Client } from '../models/Client';

export abstract class ClientRepository {
  abstract getProfileByRun(run: number): Promise<Client | null>;
}
