import React from "react";
import user from "../../component/iconsSVG/UserName";
import NavDashboard from "../../component/navDashboard/NavDashboard";
import styles from "./dashboard.module.css";
import CustomSelection from "../../component/customSelect/CustomSelect";
import DashboardIconNew from "../../component/iconsSVG/DashboardIconNew";

const Dashboard = () => {
  const navLinks = [
    { to: "/", text: "Perfil", image: user },
    { to: "/post", text: "Publicaciones", image: user },
    { to: "/comment", text: "Comentarios", image: user },
    { to: "/user", text: "Usuarios", image: user },
    { to: "/salir", text: "salir", image: user },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <CustomSelection
          svg={<DashboardIconNew />}
          name={true}
          nameValue={"Configuración"}
        />
        <NavDashboard links={navLinks} />
      </div>
      <div>
        <h3>dependiendo lo que elija el usuario se va a ver en esta parte</h3>
      </div>
    </div>
  );
};

export default Dashboard;
