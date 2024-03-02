import { UserEntity } from './users.entity';
import { UserRepositoryInterface } from './users.repository.interface';

export class UserInMemoryRepository implements UserRepositoryInterface {
  private users: Map<string, UserEntity>;

  constructor() {
    this.users = new Map<string, UserEntity>();
  }

  public async findById(id: string): Promise<UserEntity> {
    return this.users.get(id);
  }

  public async findAll(): Promise<UserEntity[]> {
    return Array.from(this.users.values());
  }

  public async create(user: UserEntity): Promise<UserEntity> {
    const id = user?.toJSON()?.id;
    this.users.set(id, user);
    return this.users.get(id);
  }

  public async delete(id: string): Promise<void> {
    this.users.delete(id);
  }

  public async update(id: string, user: UserEntity): Promise<UserEntity> {
    this.users.set(id, user);
    return this.users.get(id);
  }
}
