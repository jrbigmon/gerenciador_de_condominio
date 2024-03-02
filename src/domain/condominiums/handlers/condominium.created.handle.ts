import { CondominiumCreatedEvent } from '../events/condominium.created.event';
import { DomainHandle } from '../../../share/domain.handle';

export class CondominiumCreatedHandle implements DomainHandle {
  handle(event: CondominiumCreatedEvent): Promise<void> {}
}
