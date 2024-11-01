import { Region } from './region';

export abstract class RegionRepository {
  abstract create(region: Region): Promise<void>;
  abstract findAll(): Promise<Region[]>;
}
