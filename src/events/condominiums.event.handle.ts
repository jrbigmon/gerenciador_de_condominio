import { CondominiumEntity } from '../domain/condominiums/entities/condominiums.entity';
import { Utils } from '../utils/utils';
import { EventHandle } from './event.handle';

export class CondominiumEventHandle extends EventHandle {
  constructor(public eventName: string, public payload: CondominiumEntity) {
    const version = '1';
    const eventId = Utils.generateID();
    super(version, eventId, eventName, payload);
  }
}
