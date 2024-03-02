import { AggregateRootEntity } from '../../../aggregateRoot/aggregate.root.entity';
import { UserEventHandle } from '../../../events/users.event.handle';
import { Password } from '../../../utils/password';
import { Utils } from '../../../utils/utils';
import { UserInterface } from './users.interface';

export class UserEntity extends AggregateRootEntity {
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

    userCreated.emitEvent(new UserEventHandle('user-created', userCreated));

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
