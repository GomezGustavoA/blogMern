import { useDispatch, useSelector } from "react-redux";
import Avatar from "../avatarUser/AvatarUser";
import Nav from "../nav/Nav";
import styles from "./header.module.css";
import DropdownMenu from "../dropdownMenu/DropdownMenu";
import { logout } from "../../redux/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const handleLogout = () => {
    dispatch(logout());
  };
  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/blog", text: "Blog" },
    { to: "/sign-up", text: "SignUp" },
    { to: "/sign-in", text: "SignIn" },
  ];
  const items = [
    { to: "/", text: "Home" },
    { to: "/blog", text: "Blog" },
    { to: "/sign-up", text: "SignUp" },
    { to: "/sign-in", text: "SignIn" },
    { name: "logout", funct: handleLogout },
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
          items={items}
        />
      </div>
    </header>
  );
};

export default Header;
