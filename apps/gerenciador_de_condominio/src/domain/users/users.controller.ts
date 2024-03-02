import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './users.service';
import { UserCreateDto } from './dto/user-create.dto';
import { UserEntity } from './entities/users.entity';

@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  public async create(@Body() body: UserCreateDto): Promise<UserEntity> {
    try {
      return await this.userService.create(body);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
