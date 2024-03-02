import { Module } from '@nestjs/common';
import { UserModule } from './domain/users/users.module';

@Module({
  imports: [UserModule],
})
export class AppModule {}
