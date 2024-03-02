import { TowerInterface } from '../../towers/entities/towers.interface';

export interface CondominiumInterface {
  id?: string;
  name: string;
  towers: TowerInterface[];
}
