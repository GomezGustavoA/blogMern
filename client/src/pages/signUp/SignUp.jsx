import React, { useEffect, useState } from "react";
import { signUpAsync } from "../../redux/authSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import UploadImageButton from "../../component/uploadImagenButton/UploadImagenButton";
import CustomInput from "../../component/customInput/CustomImput";
import styles from "./signUp.module.css";
import SubmitButton from "../../component/submitButton/SubmitButton";
import { validationForm } from "../../validation/validationForm";
import { urls } from "../../utils/constant/urls";
import Email from "../../component/iconsSVG/email";
import Name from "../../component/iconsSVG/name";
import UserName from "../../component/iconsSVG/UserName";
import Password from "../../component/iconsSVG/Password";

const SignUp = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState();
  const [toggleBolean, setTogglebolean] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
    image: urls.IMAGE_URL_LOGOUT, // Puedes establecer un valor predeterminado o dejarlo vacío
  });
  const handleToggle = () => {
    setTogglebolean(!toggleBolean);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(toggleBolean);

  const ChangeUploadImage = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setImage(event.target.result);
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.image) {
      const dataImage = new FormData();
      dataImage.append("file", image);
      dataImage.append("upload_preset", "Presets_blogMern");

      const { data } = await axios.post(urls.API_URL_CLOUDINARY, dataImage);
      console.log(data.secure_url);
      setFormData({ ...formData, image: data.secure_url });
    }
    if (validationForm.validationSignup(formData)) {
      dispatch(signUpAsync(formData));
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.registerAndPhoto}>
        <h2>Registrarse</h2>
        <UploadImageButton onChange={ChangeUploadImage} image={image} />
      </div>

      <form onSubmit={handleSubmit}>
        <CustomInput
          icon={<Name />}
          label="Nombre"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

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
          icon={<Email />}
          label="Email"
          type="email"
          name="email"
          value={formData.email}
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
          <SubmitButton text="Registrarse" width={120} height={40} />
        </dir>
        <p>
          ¿Ya tienes cuenta? <span>click aqui</span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
