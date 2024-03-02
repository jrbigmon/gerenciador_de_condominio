import { Injectable } from '@nestjs/common';
import { UserEntity } from './entities/users.entity';
import { UserCreateDto } from './dto/user-create.dto';

@Injectable()
export class UserService {
  public async create(record: UserCreateDto): Promise<UserEntity> {
    const userCreated = UserEntity.create(record);

    return userCreated;
  }
}
