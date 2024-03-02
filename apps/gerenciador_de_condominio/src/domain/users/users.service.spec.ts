import { UserCreateDto } from './dto/user-create.dto';
import { UserEntity } from './entities/users.entity';
import { UserInMemoryRepository } from './entities/users.in.memory.repository';
import { UserService } from './users.service';

describe('UsersService', () => {
  let userService: UserService;

  beforeEach(() => {
    userService = new UserService(new UserInMemoryRepository());
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

  it('espero criar um usuario e a lista de usuarios ter o comprimento 1', async () => {
    const userPayload: UserCreateDto = {
      name: 'vagner',
      cpf: '478233211332',
      mobile: '977223321231',
      condominiumId: '321232313',
      email: 'vagner@mail.com',
      password: '123321213',
    };

    await userService.create(userPayload);
    const usersInMemory = await userService.findAll();
    expect(usersInMemory).toHaveLength(1);
  });

  it('espero criar um usuario e busca-lo pelo id', async () => {
    const userPayload: UserCreateDto = {
      name: 'vagner',
      cpf: '478233211332',
      mobile: '977223321231',
      condominiumId: '321232313',
      email: 'vagner@mail.com',
      password: '123321213',
    };

    const userCreated = await userService.create(userPayload);
    const userInMemory = await userService.findById(userCreated?.toJSON().id);
    expect(userInMemory).toBeDefined();
    expect(userInMemory.toJSON().id).toBe(userCreated?.toJSON().id);
  });

  it('espero criar e atualizar o usuario criado', async () => {
    const userPayload: UserCreateDto = {
      name: 'vagner',
      cpf: '478233211332',
      mobile: '977223321231',
      condominiumId: '321232313',
      email: 'vagner@mail.com',
      password: '123321213',
    };

    const userCreated = await userService.create(userPayload);

    const userUpdated = await userService.update(userCreated?.toJSON()?.id, {
      name: 'Junior',
      mobile: '111111111111',
    });

    expect(userUpdated).toBeDefined();
    expect(userUpdated?.toJSON()?.name).toBe('Junior');
    expect(userUpdated?.toJSON()?.mobile).toBe('111111111111');
  });
});
