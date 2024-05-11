import { useSelector } from "react-redux";
import Avatar from "../avatarUser/AvatarUser";
import Nav from "../nav/Nav";
import styles from "./header.module.css";
import DropdownMenu from "../dropdownMenu/DropdownMenu";

const Header = () => {
  const user = useSelector((state) => state.auth.user);
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
      <div className={styles.navAndAvatar}>
        <Nav links={navLinks} />
        <DropdownMenu
          avatar={<Avatar imageUrl={user?.image} width={40} />}
          links={navLinks}
        />
      </div>
    </header>
  );
};

export default Header;
