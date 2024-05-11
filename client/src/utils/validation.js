export const validation = {
  validateLength: (value, minLength, maxLength) => {
    return value.length >= minLength && value.length <= maxLength;
  },
  validatePassword: (password) => {
    //   (?=.*\d): Debe contener al menos un dígito (0-9).
    // (?=.*[a-z]): Debe contener al menos una letra minúscula (a-z).
    // (?=.*[A-Z]): Debe contener al menos una letra mayúscula (A-Z).
    // (?=.*[a-zA-Z]): Puede contener tanto letras minúsculas como mayúsculas.
    // .{8,}: Debe tener una longitud mínima de 8 caracteres.
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  },
  validateEmail: (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  },
  validateLetters: (name) => {
    return /^[A-Za-z]+$/.test(name);
  },
  allValuesNotEmpty: (obj) => {
    return Object.values(obj).every((value) => value.trim() !== "");
  },
  validImage: (image) => {
    return /^https?:\/\/.+\.(jpg|jpeg|png|gif)$/i.test(image);
  },
  validateAlphanumeric: (value) => {
    return /[a-zA-Z]+[a-zA-Z0-9]*/.test(value);
  },
};
