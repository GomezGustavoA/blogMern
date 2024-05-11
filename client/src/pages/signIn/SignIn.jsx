import { useState } from "react";
import { useDispatch } from "react-redux";
import { signInAsync } from "../../redux/authSlice";
import { validationForm } from "../../validation/validationForm";
import styles from "./signIn.module.css";
import CustomInput from "../../component/customInput/CustomImput";
import SubmitButton from "../../component/submitButton/SubmitButton";
import UserName from "../../component/iconsSVG/UserName";
import Password from "../../component/iconsSVG/Password";

const SignIn = () => {
  const [toggleBolean, setTogglebolean] = useState(false);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const handleToggle = () => {
    setTogglebolean(!toggleBolean);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validationForm.validationSignin(formData)) {
      dispatch(signInAsync(formData));
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <CustomInput
          icon={<UserName />}
          label="Nombre de Usuario"
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          required
        />

        <CustomInput
          icon={<Password toggle={toggleBolean} />}
          label="Contraseña"
          type={toggleBolean ? "trext" : "password"}
          name="password"
          value={formData.password}
          onChange={handleChange}
          onClick={handleToggle}
          required
        />
        <dir className={styles.btn}>
          <SubmitButton text="Iniciar Sesión" width={120} height={40} />
        </dir>

        <p>
          ¿Olvidate tu Contraseña? <span>click aqui</span>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
