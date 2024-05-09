import Nav from "../nav/Nav";
import styles from "./footer.module.css";

const Footer = () => {
  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/blog", text: "Blog" },
    { to: "/sign-up", text: "SignUp" },
    { to: "/sign-in", text: "SignIn" },
  ];
  return (
    <footer className={styles.footerContainer}>
      <Nav links={navLinks} />
    </footer>
  );
};
export default Footer;
