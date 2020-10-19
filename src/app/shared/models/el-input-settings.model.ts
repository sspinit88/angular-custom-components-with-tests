export class ElInputSettings {
  iconName: string;
  password?: boolean;

  constructor(
    iconName: string = '',
    password: boolean = false,
  ) {
    this.iconName = iconName;
    this.password = password;
  }
}
