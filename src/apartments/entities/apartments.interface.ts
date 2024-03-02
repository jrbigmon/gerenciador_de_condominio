import { UserInterface } from '../../users/entities/users.interface';

export interface ApartmentInterface {
  id?: string;
  number: string;
  residents: UserInterface[];
}
