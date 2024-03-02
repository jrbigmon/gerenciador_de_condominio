import { CondominiumEntity } from '../domain/condominiums/entities/condominiums.entity';
import { Utils } from '../utils/utils';
import { DomainEvent } from './domain.event';

export class CondominiumEvent extends DomainEvent {
  constructor(public eventName: string, public payload: CondominiumEntity) {
    const version = '1';
    const eventId = Utils.generateID();
    super(version, eventId, eventName, payload);
  }
}
