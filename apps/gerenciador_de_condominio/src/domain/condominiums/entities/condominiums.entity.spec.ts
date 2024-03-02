import { CondominiumEntity } from './condominiums.entity';
import { CondominiumInterface } from './condominiums.interface';

describe('CondominiumEntity', () => {
  it('espero criar um condominio com apartamentos e torres', () => {
    const condominium: CondominiumInterface = {
      name: 'Le vin garden',
      towers: [
        {
          id: '1',
          name: 'torre1',
          apartments: [
            {
              id: '1',
              number: '97',
              residents: [],
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
    expect(condominiumJSON?.towers[0].apartments[0].residents).toHaveLength(0);
  });
});
