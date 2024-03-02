import { Injectable } from '@nestjs/common';
import { UserEntity } from './entities/users.entity';
import { UserCreateDto } from './dto/user-create.dto';
import { UserRepositoryInterface } from './entities/users.repository.interface';
import { UserInMemoryRepository } from './entities/users.in.memory.repository';

@Injectable()
export class UserService {
  private readonly userRepository: UserRepositoryInterface;

  constructor() {
    this.userRepository = new UserInMemoryRepository();
  }

  public async create(record: UserCreateDto): Promise<UserEntity> {
    const userCreated = UserEntity.create(record);

    this.userRepository.create(userCreated);

    return userCreated;
  }

  public async list(): Promise<UserEntity[]> {
    return this.userRepository.findAll();
  }
}
