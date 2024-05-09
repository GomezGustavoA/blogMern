import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { signInAsync } from "../../redux/authSlice";
import { ToastContainer } from "react-toastify";

const SignIn = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signInAsync(formData));
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
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
          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
      <ToastContainer />
    </div>
  );
};

export default SignIn;
