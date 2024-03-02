import { CondominiumCreatedEvent } from '../events/condominium.created.event';
import { DomainHandle } from '../../../share/domain.handle';

export class CondominiumCreatedHandler implements DomainHandle {
  async handle(event: CondominiumCreatedEvent): Promise<void> {
    console.log(event);
  }
}
