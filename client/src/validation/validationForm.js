import textNotification from "../notifications/textNotification";
import { validation } from "../utils/validation";
import { toast } from "react-toastify";

export const validationForm = {
  validationSignin: (dataForm) => {
    const errors = {};
    // Verificar si todos los campos están llenos
    if (!validation.allValuesNotEmpty(dataForm)) {
      errors.allFieldsRequired = textNotification.warning.allFieldsRequired;
    }
    // Verificar la longitud del nombre de usuario
    if (!validation.validateLength(dataForm.userName, 6, 12)) {
      errors.userNameLength = textNotification.warning.lengthInvalid(
        dataForm.userName,
        6,
        12
      );
    }
    // Verificar si el nombre de usuario es alfanumérico
    if (!validation.validateAlphanumeric(dataForm.userName)) {
      errors.usernameValidate = textNotification.warning.usernameValidate(
        dataForm.userName
      );
    }
    // Verificar la validez de la contraseña
    if (!validation.validatePassword(dataForm.password)) {
      errors.validatePassword = textNotification.warning.passwordValidate;
    }
    // Mostrar todos los errores acumulados
    const uniqueErrors = new Set(Object.values(errors));
    uniqueErrors.forEach((errorMsg) => {
      toast.warning(errorMsg);
    });
    return Object.keys(errors).length === 0;
  },
  validationSignup: (dataForm) => {
    const errors = {};
    if (!validation.allValuesNotEmpty(dataForm)) {
      errors.allFieldsRequired = textNotification.warning.allFieldsRequired;
    }
    if (!validation.validateLength(dataForm.userName, 6, 20)) {
      errors.userNameLength = textNotification.warning.lengthInvalid(
        dataForm.userName,
        6,
        20
      );
    }
    if (!validation.validateLength(dataForm.name, 8, 20)) {
      errors.userNameLength = textNotification.warning.lengthInvalid(
        dataForm.userName,
        8,
        20
      );
    }

    const uniqueErrors = new Set(Object.values(errors));
    uniqueErrors.forEach((errorMsg) => {
      toast.warning(errorMsg);
    });

    return Object.keys(errors).length === 0;
  },
};
