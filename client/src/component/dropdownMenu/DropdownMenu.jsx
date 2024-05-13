import React, { useState, useEffect, useRef } from "react";
import styles from "./dropdownMenu.module.css";
import { Link } from "react-router-dom";

const DropdownMenu = ({ avatar, items, width, left }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = (event) => {
    event.stopPropagation(); // Detiene la propagación del evento click
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.avatar}
        onClick={toggleMenu}
        style={{ width: `${width}px` }}
      >
        {React.cloneElement(avatar, { toogle: isOpen })}
        <ul
          ref={menuRef}
          className={`${styles.menu} ${isOpen ? styles.open : ""}`}
          style={{ left: `${left}px` }}
        >
          {items.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                closeMenu();
                item.funct && item.funct();
              }}
            >
              {item.to ? (
                <Link to={item.to}>{item.text}</Link>
              ) : (
                <span>{item.name}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
