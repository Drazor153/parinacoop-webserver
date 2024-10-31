import { Region } from "./region";

export abstract class RegionRepository{
    abstract create(region: Region): Promise<number>;
    abstract findAll(): Promise<Region[]>;
}