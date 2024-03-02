import { Utils } from './utils';

describe('Utils', () => {
  it('espero remover os caracteres especiais de uma string', () => {
    const cpfIncorrect = '472.1332.1223-XX';
    const cpfCorrect = '47213321223XX';

    const cpfFormatted = Utils.removeSpecialChars(cpfIncorrect);

    expect(cpfFormatted).toBe(cpfCorrect);
  });

  it('espero gerar um id do tipo string que nao seja nulo', () => {
    const uuid = Utils.generateID();

    expect(uuid).not.toBeNull();
  });
});
