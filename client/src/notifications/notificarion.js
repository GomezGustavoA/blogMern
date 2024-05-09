import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notification = {
  error: (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // También podrías agregar más opciones según tus necesidades
    });
  },
  success: (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // También podrías agregar más opciones según tus necesidades
    });
  },
  info: (message) => {
    toast.info(message, {
      position: "top-right",
      autoClose: 3,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  },
};

export default notification;
