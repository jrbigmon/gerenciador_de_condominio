import { UserEntity } from './users.entity';

export interface UserRepositoryInterface {
  findById(id: string): Promise<UserEntity>;
  findAll(): Promise<UserEntity[]>;
  create(user: UserEntity): Promise<UserEntity>;
  delete(id: string): Promise<void>;
  update(id: string, user: UserEntity): Promise<UserEntity>;
}
