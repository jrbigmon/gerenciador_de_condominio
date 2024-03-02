export class EventHandle {
  public readonly emittedDate: Date;
  constructor(
    public readonly version: string,
    public readonly eventId: string,
    public readonly eventName: string,
    public readonly payload: unknown,
  ) {
    this.emittedDate = new Date();
  }
}
