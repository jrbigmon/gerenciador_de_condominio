import { UserEntity } from './users.entity';
import { UserInterface } from './users.interface';

describe('UsersEntity', () => {
  it('Espero criar um usuario com nome, email, cpf, celuar e senha', () => {
    const userToCreate: UserInterface = {
      name: 'Vagner',
      email: 'vagner.test@mail.com',
      cpf: '492.331.111.332-XX',
      mobile: '+55223331122321',
      condominiumId: '10',
    };

    const newUserCreated = UserEntity.create(userToCreate);

    const newUserJSON = newUserCreated.toJSON();

    expect(newUserJSON).toMatchObject({
      ...userToCreate,
      cpf: '492331111332XX',
    });
    expect(newUserJSON?.id).not.toBeNull();
  });

  it('espero que o cpf do usuario criado seja removido os caracteres especiais', () => {
    const userToCreate: UserInterface = {
      name: 'Vagner',
      email: 'vagner.test@mail.com',
      cpf: '492.331.111.332-XX',
      mobile: '+55223331122321',
      condominiumId: '10',
    };

    const newUserCreated = UserEntity.create(userToCreate);

    const newUserJSON = newUserCreated.toJSON();

    expect(newUserJSON?.cpf).not.toBe(userToCreate?.cpf);
  });

  it('espero conseguir atualizar o campo de name e mobile do usuario', () => {
    const userToCreate: UserInterface = {
      name: 'Vagner',
      email: 'vagner.test@mail.com',
      cpf: '492.331.111.332-XX',
      mobile: '+55223331122321',
      condominiumId: '10',
    };

    const newUserCreated = UserEntity.create(userToCreate);

    newUserCreated.update({ name: 'Junior', mobile: '1111111111' });

    expect(newUserCreated.toJSON().name).toBe('Junior');
    expect(newUserCreated.toJSON().mobile).toBe('1111111111');
  });
});
