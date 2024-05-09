import Nav from "../nav/Nav";
import styles from "./header.module.css";

const Header = () => {
  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/blog", text: "Blog" },
    { to: "/sign-up", text: "SignUp" },
    { to: "/sign-in", text: "SignIn" },
  ];
  return (
    <header className={styles.headerContainer}>
      <div className={styles.Logo}>
        <h3>My Blog</h3>
        {/* <img src="/ruta/al/logo.png" alt="Logo" /> */}
      </div>
      <Nav links={navLinks} />
    </header>
  );
};

export default Header;
