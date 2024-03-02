import { Injectable } from '@nestjs/common';
import { UserEntity } from './entities/users.entity';
import { UserCreateDto } from './dto/user-create.dto';
import { UserRepositoryInterface } from './entities/users.repository.interface';
import { UserUpdateDto } from './dto/user-update.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepositoryInterface) {}

  public async create(record: UserCreateDto): Promise<UserEntity> {
    const userCreated = UserEntity.create(record);

    this.userRepository.create(userCreated);

    return userCreated;
  }

  public async update(id: string, user: UserUpdateDto): Promise<UserEntity> {
    const userEntity = await this.userRepository.findById(id);

    if (!userEntity) {
      throw new Error('User not found');
    }

    userEntity.update(user);

    return this.userRepository.update(id, userEntity);
  }

  public async findAll(): Promise<UserEntity[]> {
    return this.userRepository.findAll();
  }

  public async findById(id: string): Promise<UserEntity> {
    return this.userRepository.findById(id);
  }

  public async delete(id: string): Promise<void> {
    return this.userRepository.delete(id);
  }
}
