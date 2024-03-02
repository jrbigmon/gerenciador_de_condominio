import { Password } from './password';
import { Utils } from './utils';

describe('Password', () => {
  it('espero encriptar uma senha e o resultado ser diferente do inputado', () => {
    const email = 'vagner.junior@mail.com';
    const cpf = '42123122332XX';

    const passwordEncrypted = Password.gen(
      `${Utils.removeSpecialChars(cpf)}-${email}`,
    );

    expect(passwordEncrypted).not.toBeNull();
    expect(passwordEncrypted).not.toMatch(email);
    expect(passwordEncrypted).not.toMatch(cpf);
  });

  it('espero criar uma senha e consegui decripta-la e saber se o valor esta correto', () => {
    const email = 'vagner.junior@mail.com';
    const cpf = '42123122332XX';
    const password = `${Utils.removeSpecialChars(cpf)}-${email}`;

    const passwordEncrypted = Password.gen(password);

    const passwordIsValid = Password.valid(passwordEncrypted, password);

    expect(passwordIsValid).toBe(true);
  });

  it('espero que retorne falso quando for decripar uma senha incorreta', () => {
    const email = 'vagner.junior@mail.com';
    const cpf = '42123122332XX';
    const password = `${Utils.removeSpecialChars(cpf)}-${email}`;

    const passwordEncrypted = Password.gen(password);

    const passwordIsValid = Password.valid(passwordEncrypted, 'wrongPassword');

    expect(passwordIsValid).toBe(false);
  });
});
