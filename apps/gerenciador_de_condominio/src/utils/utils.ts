import { randomUUID } from 'crypto';

export class Utils {
  public static removeSpecialChars(value: string): string {
    return value?.replace(/[^a-zA-Z0-9]/g, '');
  }

  public static generateID() {
    return randomUUID();
  }
}
