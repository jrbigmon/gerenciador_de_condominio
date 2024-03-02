import { CondominiumEntity } from './condominiuns.entity';

describe('CondominiumEntity', () => {
  it('espero criar um condominio com apartamentos e torres', () => {
    const condominium = {
      name: 'Le vin garden',
      towers: [
        {
          id: '1',
          name: 'torre1',
          apartments: [
            {
              id: '1',
              number: '97',
              residents: [
                {
                  id: '1',
                  name: 'vagner',
                  email: 'vagner@mail.com',
                  cpf: '4732213233123XX',
                  mobile: '5533211223321',
                },
              ],
            },
          ],
        },
      ],
    };

    const condominiumCreated = CondominiumEntity.create(condominium);
    const condominiumJSON = condominiumCreated.toJSON();
    expect(condominiumJSON).toMatchObject(condominium);
    expect(condominiumJSON?.id).not.toBeNull();
    expect(condominiumJSON?.towers).toHaveLength(1);
    expect(condominiumJSON?.towers[0].apartments).toHaveLength(1);
    expect(condominiumJSON?.towers[0].apartments[0].residents).toHaveLength(1);
  });
});
