import { DomainEvent } from '../share/domain.event';

export abstract class AggregateRootEntity {
  public async emitEvent(eventHandle: DomainEvent) {
    console.log(
      'event: ',
      eventHandle.eventName,
      '\npayload: ',
      JSON.stringify(eventHandle.payload, null, 4),
    );
  }
}
