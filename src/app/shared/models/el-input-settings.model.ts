export class ElInputSettings {

  iconName?: string;
  password?: boolean;
  onlyNumbers?: string;
  textLimit?: string;
  clearBtn?: boolean;

  constructor(
    iconName?: string,
    password?: boolean,
    onlyNumbers?: string,
    textLimit?: string,
    clearBtn?: boolean,
  ) {
    this.iconName = iconName;
    this.password = password;
    this.onlyNumbers = onlyNumbers;
    this.textLimit = textLimit;
    this.clearBtn = clearBtn;
  }
}
