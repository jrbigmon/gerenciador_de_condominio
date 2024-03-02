import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UserController } from './users.controller';

const services = [UserService];

@Module({
  imports: [],
  controllers: [UserController],
  providers: services,
  exports: services,
})
export class UserModule {}
