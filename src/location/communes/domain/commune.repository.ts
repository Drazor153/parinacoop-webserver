import { Commune } from './commune';

export abstract class CommuneRepository {
  abstract create(commune: Commune): Promise<void>;
}
