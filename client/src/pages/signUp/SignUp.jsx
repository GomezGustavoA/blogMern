import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { signUpAsync } from "../../redux/authSlice";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
    image: "", // Puedes establecer un valor predeterminado o dejarlo vacío
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signUpAsync(formData));
  };

  return (
    <div>
      <h2>Registrarse</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Nombre de Usuario:</label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>image:</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
