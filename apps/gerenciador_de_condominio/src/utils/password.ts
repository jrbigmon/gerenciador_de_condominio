import { compareSync, genSaltSync, hashSync } from 'bcryptjs';

export class Password {
  public static gen(password: string): string {
    return hashSync(password, genSaltSync(10));
  }

  public static valid(hash: string, password: string): boolean {
    return compareSync(password, hash);
  }
}
