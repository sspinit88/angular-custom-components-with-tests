export class ElInputSettings {

  iconName?: string;
  password?: boolean;
  onlyNumbers?: string;

  constructor(
    iconName?: string,
    password?: boolean,
    onlyNumbers?: string
  ) {
    this.iconName = iconName;
    this.password = password;
    this.onlyNumbers = onlyNumbers;
  }
}
