import { ApartmentInterface } from '../../apartments/entities/apartments.interface';

export interface TowerInterface {
  id?: string;
  name: string;
  apartments?: ApartmentInterface[];
}
