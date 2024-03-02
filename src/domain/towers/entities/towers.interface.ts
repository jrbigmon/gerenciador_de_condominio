import { ApartmentInterface } from '../../domain/apartments/entities/apartments.interface';

export interface TowerInterface {
  name: string;
  apartments: ApartmentInterface[];
}
