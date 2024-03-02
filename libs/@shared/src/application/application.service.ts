import { Injectable } from '@nestjs/common';

@Injectable()
export class ApplicationService {
  public async start() {
    console.log('started application service');
  }

  public async finish() {
    console.log('finished application service');
  }

  public async fail() {
    console.log('failed application service');
  }

  public async run<T>(callback: () => Promise<T>): Promise<T> {
    await this.start();
    try {
      const result = await callback();
      await this.finish();
      return result;
    } catch (error) {
      await this.fail();
      throw error;
    }
  }
}
