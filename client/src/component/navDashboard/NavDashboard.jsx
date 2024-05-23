import React from "react";
import { Link } from "react-router-dom";
import styles from "./navdashboard.module.css";

const NavDashboard = ({ links }) => {
  return (
    <nav className={styles.container}>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <div className={styles.imgAndLink}>
              <div className={styles.image}>{<link.image />}</div>
              <div className={styles.link}>
                <Link to={link.to}>{link.text}</Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavDashboard;
