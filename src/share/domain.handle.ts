import { DomainEvent } from './domain.event';

export interface DomainHandle {
  handle(event: DomainEvent): Promise<void>;
}
