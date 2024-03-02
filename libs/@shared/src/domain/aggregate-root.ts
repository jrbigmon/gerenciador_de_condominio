import { DomainEvent } from './domain.event';

export abstract class AggregateRoot {
  events: Set<DomainEvent> = new Set<DomainEvent>();
  dispatchedEvents: Set<DomainEvent> = new Set<DomainEvent>();

  addEvent(event: DomainEvent) {
    this.events.add(event);
  }

  markEventsAsDispatched(event: DomainEvent) {
    this.dispatchedEvents.add(event);
    this.events.delete(event);
  }

  getUncommittedEvents(): DomainEvent[] {
    return Array.from(this.events);
  }

  clearEvents() {
    this.events.clear();
    this.dispatchedEvents.clear();
  }
}
