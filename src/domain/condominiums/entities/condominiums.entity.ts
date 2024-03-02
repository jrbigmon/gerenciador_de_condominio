import { AggregateRootEntity } from '../../../aggregateRoot/aggregate.root.entity';
import { CondominiumEventHandle } from '../../../events/condominiums.event.handle';
import { Utils } from '../../../utils/utils';
import { TowerInterface } from '../../towers/entities/towers.interface';
import { CondominiumInterface } from './condominiums.interface';

export class CondominiumEntity extends AggregateRootEntity {
  private name: string;
  private id: string;
  private towers: TowerInterface[];

  constructor(name: string, towers: TowerInterface[], id?: string) {
    super();
    this.name = name;
    this.towers = towers;
    this.id = id ?? Utils.generateID();
  }

  public static create({
    name,
    towers,
  }: CondominiumInterface): CondominiumEntity {
    const condominiumCreated = new CondominiumEntity(name, towers);

    condominiumCreated.emitEvent(
      new CondominiumEventHandle('condominium-created', condominiumCreated),
    );

    return condominiumCreated;
  }

  public toJSON() {
    return {
      id: this.id,
      name: this.name,
      towers: this.towers,
    };
  }
}
