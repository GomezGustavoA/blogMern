import { Link } from "react-router-dom";
import styles from "./nav.module.css";

const Nav = ({ links }) => {
  return (
    <nav className={styles.navContainer}>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.to}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Nav;
