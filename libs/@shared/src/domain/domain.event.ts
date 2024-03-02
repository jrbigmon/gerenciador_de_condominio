export interface DomainEvent {
  emittedDate: Date;
  version: string;
  eventId: string;
  eventName: string;
  payload: unknown;
}
