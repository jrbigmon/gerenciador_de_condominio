import { UserCreateDto } from './dto/user-create.dto';
import { UserEntity } from './entities/users.entity';
import { UserService } from './users.service';

describe('UsersService', () => {
  let userService: UserService;

  beforeEach(() => {
    userService = new UserService();
  });

  it('espero criar um usuario e retornar a entidade userEntity', async () => {
    const userPayload: UserCreateDto = {
      name: 'vagner',
      cpf: '478233211332',
      mobile: '977223321231',
      condominiumId: '321232313',
      email: 'vagner@mail.com',
      password: '123321213',
    };

    const userCreated = await userService.create(userPayload);

    const userCreatedJSON = userCreated.toJSON();

    expect(userCreatedJSON?.id).not.toBeNull();
    expect(userCreatedJSON).toMatchObject({
      name: 'vagner',
      cpf: '478233211332',
      mobile: '977223321231',
      condominiumId: '321232313',
      email: 'vagner@mail.com',
    });
  });

  it('espero criar um usuario e o metodo addEvent ser invocado', async () => {
    const userPayload: UserCreateDto = {
      name: 'vagner',
      cpf: '478233211332',
      mobile: '977223321231',
      condominiumId: '321232313',
      email: 'vagner@mail.com',
      password: '123321213',
    };

    const spyUserEntity = jest.spyOn(UserEntity.prototype, 'addEvent');
    await userService.create(userPayload);
    expect(spyUserEntity).toBeCalled();
    expect(spyUserEntity).toBeCalledTimes(1);
  });
});
