import { UserEntity } from '../domain/users/entities/users.entity';
import { Utils } from '../utils/utils';
import { DomainEvent } from './domain.event';

export class UserEvent extends DomainEvent {
  constructor(public eventName: string, public payload: UserEntity) {
    const version = '1';
    const eventId = Utils.generateID();
    super(version, eventId, eventName, payload);
  }
}
