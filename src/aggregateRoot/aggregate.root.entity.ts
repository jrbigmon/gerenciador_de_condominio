import { EventHandle } from '../events/event.handle';

export abstract class AggregateRootEntity {
  public async emitEvent(eventHandle: EventHandle) {
    console.log(
      'event: ',
      eventHandle.eventName,
      '\npayload: ',
      JSON.stringify(eventHandle.payload, null, 4),
    );
  }
}
