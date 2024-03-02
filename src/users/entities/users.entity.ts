import { Password } from '../../utils/password';
import { Utils } from '../../utils/utils';
import { UserInterface } from './users.interface';

export class UserEntity {
  private name: string;
  private email: string;
  private cpf: string;
  private mobile: string;
  private password?: string;
  private id?: string;

  constructor(
    name: string,
    email: string,
    cpf: string,
    mobile: string,
    password?: string,
    id?: string,
  ) {
    this.name = name;
    this.email = email;
    this.cpf = cpf;
    this.mobile = mobile;
    this.password =
      password ?? Password.gen(`${Utils.removeSpecialChars(cpf)}-${email}`);
    this.id = id ?? Utils.generateID();
  }

  public static create({
    name,
    email,
    cpf,
    mobile,
  }: UserInterface): UserEntity {
    const userCreated = new UserEntity(name, email, cpf, mobile);

    return userCreated;
  }

  public toJSON() {
    return {
      name: this.name,
      email: this.email,
      cpf: this.cpf,
      mobile: this.mobile,
      password: this.password,
      id: this.id,
    };
  }
}
