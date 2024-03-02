import { UserCreatedEvent } from '../events/user.created.event';
import { Password } from '../../../utils/password';
import { Utils } from '../../../utils/utils';
import { UserInterface } from './users.interface';
import { AggregateRoot } from '../../../../../../libs/@shared/src/domain/aggregate-root';

export class UserEntity extends AggregateRoot {
  private name: string;
  private email: string;
  private cpf: string;
  private mobile: string;
  private condominiumId: string;
  private password?: string;
  private id?: string;

  constructor(
    name: string,
    email: string,
    cpf: string,
    mobile: string,
    condominiumId: string,
    password?: string,
    id?: string,
  ) {
    super();
    this.name = name;
    this.email = email;
    this.cpf = cpf;
    this.mobile = mobile;
    this.condominiumId = condominiumId;
    this.password =
      password ?? Password.gen(`${Utils.removeSpecialChars(cpf)}-${email}`);
    this.id = id ?? Utils.generateID();
  }

  public static create({
    name,
    email,
    cpf,
    mobile,
    condominiumId,
  }: UserInterface): UserEntity {
    const userCreated = new UserEntity(name, email, cpf, mobile, condominiumId);

    userCreated.addEvent(new UserCreatedEvent(userCreated));

    return userCreated;
  }

  public toJSON() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      cpf: this.cpf,
      mobile: this.mobile,
      condominiumId: this.condominiumId,
      password: this.password,
    };
  }
}
