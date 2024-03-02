import { DomainEvent } from '../../../../../../libs/@shared/src/domain/domain.event';
import { Utils } from '../../../utils/utils';
import { UserEntity } from '../entities/users.entity';

export class UserUpdatedEvent implements DomainEvent {
  public readonly eventName = 'user-updated';
  public readonly version: string;
  public readonly eventId: string;
  public readonly emittedDate: Date;

  constructor(public payload: UserEntity) {
    this.version = '1';
    this.eventId = Utils.generateID();
    this.emittedDate = new Date();
  }
}
