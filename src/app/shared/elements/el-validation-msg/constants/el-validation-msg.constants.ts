export const EL_VALIDATION_MSG = {
  required: 'Поле обязательно для заполнения',

  requiredTrue: 'Значение должно быть установлено',

  email: 'Поле должно содержать электронную почту',

  minlength: (num: number): string => {
    return `Введите не менее ${num} символов`;
  },

  maxlength: (num: number): string => {
    return `Введите не более ${num} символов`;
  },

  min: (num: number): string => {
    return `Вводимое число должно быть больше ${num}`;
  },

  max: (num: number): string => {
    return `Вводимое число должно быть меньше ${num}`;
  },

  custom: (msg: string = ''): string => {
    let res: string = 'Поле не соответствует шаблону';

    if (!!msg) {
      res = msg;
    }

    return res;
  }
};
