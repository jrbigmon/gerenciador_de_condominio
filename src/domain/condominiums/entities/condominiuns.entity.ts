import { TowerInterface } from '../../towers/entities/towers.interface';
import { Utils } from '../../utils/utils';
import { CondominiumInterface } from './condominiuns.interface';

export class CondominiumEntity {
  private name: string;
  private id: string;
  private towers: TowerInterface[];

  constructor(name: string, towers: TowerInterface[], id?: string) {
    this.name = name;
    this.towers = towers;
    this.id = id ?? Utils.generateID();
  }

  public static create({
    name,
    towers,
  }: CondominiumInterface): CondominiumEntity {
    const condominiumCreated = new CondominiumEntity(name, towers);

    return condominiumCreated;
  }

  public toJSON() {
    return {
      name: this.name,
      towers: this.towers,
      id: this.id,
    };
  }
}
