import { CondominiumEntity } from '../entities/condominiums.entity';
import { Utils } from '../../../utils/utils';
import { DomainEvent } from '../../../../../../libs/@shared/src/domain/domain.event';

export class CondominiumCreatedEvent implements DomainEvent {
  public readonly eventName = 'condominium-created';
  public readonly version: string;
  public readonly eventId: string;
  public readonly emittedDate: Date;

  constructor(public payload: CondominiumEntity) {
    this.version = '1';
    this.eventId = Utils.generateID();
    this.emittedDate = new Date();
  }
}
