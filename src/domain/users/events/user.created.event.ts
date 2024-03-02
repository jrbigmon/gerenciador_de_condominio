import { UserEntity } from '../entities/users.entity';
import { Utils } from '../../../utils/utils';
import { DomainEvent } from '../../../share/domain.event';

export class UserCreatedEvent implements DomainEvent {
  public readonly eventName = 'user-created';
  public readonly version: string;
  public readonly eventId: string;
  public readonly emittedDate: Date;

  constructor(public payload: UserEntity) {
    this.version = '1';
    this.eventId = Utils.generateID();
    this.emittedDate = new Date();
  }
}
