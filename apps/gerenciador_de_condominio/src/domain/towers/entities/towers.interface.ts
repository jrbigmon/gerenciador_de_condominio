import { ApartmentInterface } from '../../apartments/entities/apartments.interface';

export interface TowerInterface {
  name: string;
  apartments: ApartmentInterface[];
}
