import { CondominiumCreatedEvent } from '../events/condominium.created.event';
import { Utils } from '../../../utils/utils';
import { TowerInterface } from '../../towers/entities/towers.interface';
import { CondominiumInterface } from './condominiums.interface';
import { AggregateRoot } from '../../../../../../libs/@shared/src/domain/aggregate-root';

export class CondominiumEntity extends AggregateRoot {
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

    condominiumCreated.addEvent(
      new CondominiumCreatedEvent(condominiumCreated),
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
