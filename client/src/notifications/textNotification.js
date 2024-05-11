const textNotification = {
  success: {
    registrationSuccess: "¡Registro exitoso!",
    loginSuccess: "¡Inicio de sesión exitoso!",
    postCreated: "¡Publicación creada exitosamente!",
  },
  error: {
    registrationError: "¡Error al registrar usuario!",
    loginError: "¡Error al iniciar sesión, verifique los campos requeridos!",
    postError: "¡Error al crear la publicación!",
  },
  info: {
    duplicateUserError: "¡El usuario ingresado ya existe!",
    duplicateEmailError: "¡El email ingresado ya existe!",
  },
  warning: {
    nameValidate: (fieldName) => {
      return `${fieldName} solo debe contener letras.`;
    },
    usernameValidate: (fieldName) => {
      return `${fieldName} debe contener letras y puede ir acompañado de números.`;
    },
    emailValidate: "Ingrese una dirección de correo electrónico válida.",
    lengthInvalid: (fieldName, minLength, maxLength) => {
      return `${fieldName} debe tener entre ${minLength} y ${maxLength} caracteres.`;
    },
    allFieldsRequired: "Todos los campos son obligatorios.",
    imageInValidate:
      "Ingrese una URL de imagen válida (formatos admitidos: JPG, JPEG, PNG, GIF).",
    passwordValidate:
      "La contraseña debe tener al menos 8 caracteres e incluir al menos una letra minúscula, una letra mayúscula y un dígito.",
  },
};

export default textNotification;
