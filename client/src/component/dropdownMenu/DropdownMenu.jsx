import { useState } from "react";
import styles from "./dropdownMenu.module.css";
import { Link } from "react-router-dom";

const DropdownMenu = ({ avatar, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.avatar} onClick={toggleMenu}>
        {avatar}
      </div>
      {isOpen && (
        <ul className={styles.menu}>
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.to}>{link.text}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
