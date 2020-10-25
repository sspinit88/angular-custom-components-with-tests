export class ElInputSettings {

  iconName?: string;
  password?: boolean;
  onlyNumbers?: string;
  textLimit?: string;

  constructor(
    iconName?: string,
    password?: boolean,
    onlyNumbers?: string,
    textLimit?: string,
  ) {
    this.iconName = iconName;
    this.password = password;
    this.onlyNumbers = onlyNumbers;
    this.textLimit = textLimit;
  }
}
