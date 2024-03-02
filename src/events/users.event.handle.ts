import { UserEntity } from '../domain/users/entities/users.entity';
import { Utils } from '../utils/utils';
import { EventHandle } from './event.handle';

export class UserEventHandle extends EventHandle {
  constructor(public eventName: string, public payload: UserEntity) {
    const version = '1';
    const eventId = Utils.generateID();
    super(version, eventId, eventName, payload);
  }
}
