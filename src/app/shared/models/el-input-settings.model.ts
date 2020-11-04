export class ElInputSettings {

  iconName?: string;
  password?: boolean;
  onlyNumbers?: string;
  textLimit?: string;
  clearBtn?: boolean;
  label?: string;
  isFloatLabel?: boolean;

  constructor(
    iconName?: string,
    password?: boolean,
    onlyNumbers?: string,
    textLimit?: string,
    clearBtn?: boolean,
    label?: string,
    isFloatLabel?: boolean
  ) {
    this.iconName = iconName;
    this.password = password;
    this.onlyNumbers = onlyNumbers;
    this.textLimit = textLimit;
    this.clearBtn = clearBtn;
    this.label = label;
    this.isFloatLabel = isFloatLabel;
  }
}

export interface ElInputLabel {
  text: string;
  isFloat: boolean;
  iconExist: boolean;
}
