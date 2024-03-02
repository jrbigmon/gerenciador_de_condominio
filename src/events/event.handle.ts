export class EventHandle {
  public readonly emittedDate: Date;
  constructor(
    public readonly version: string,
    public readonly eventId: string,
    public readonly eventName: string,
    public readonly payload: any,
  ) {
    this.emittedDate = new Date();
  }
}
