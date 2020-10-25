export const RE_FORMAT_NUMBER = new RegExp(/[^\d]+/g);

export const RE_FORMAT_LETTERS_AND_NUMBERS = new RegExp(/[А-Яа-яA-Za-z0-9]/i);

export const RE_CURRENCY = new RegExp(/(\d)(?=(\d\d\d)+([^\d]|$))/g);

export const RE_NO_SPACES = new RegExp(/\s+/g);

export const RE_NO_FIRST_SPACES = new RegExp(/^[^\s][А-Яа-яA-Za-z0-9()-_.\s]{1,}/);

export const RE_EMAIL = new RegExp(/^([a-zA-Z0-9]+([-_\.\+]?[a-zA-Z0-9]+)*)\@(([a-zA-Z0-9]+([-\.][a-zA-Z0-9]+)*\.[a-zA-Z0-9]+)|([а-яА-ЯёЁ0-9]+([-\.][а-яА-ЯёЁ0-9]+)*\.[а-яА-ЯёЁ0-9]+))$/);

export const RE_ONLY_NUMBER = new RegExp(/[0-9]/i);

export const RE_ONLY_LETTERS = new RegExp(/[a-zа-я]/i);

export const RE_SNILS = new RegExp(/(\d{3})(\d{3})(\d{3})(\d{2})/g);
