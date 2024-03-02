import { Injectable } from '@nestjs/common';
import { UserEntity } from './entities/users.entity';
import { UserCreateDto } from './dto/user-create.dto';
import { UserRepositoryInterface } from './entities/users.repository.interface';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepositoryInterface) {}

  public async create(record: UserCreateDto): Promise<UserEntity> {
    const userCreated = UserEntity.create(record);

    this.userRepository.create(userCreated);

    return userCreated;
  }

  public async findAll(): Promise<UserEntity[]> {
    return this.userRepository.findAll();
  }

  public async findById(id: string): Promise<UserEntity> {
    return this.userRepository.findById(id);
  }
}
