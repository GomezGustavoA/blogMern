import React from "react";
import image from "../../../public/usuario.png";
import styles from "./avatarUser.module.css";

const Avatar = ({
  imageUrl = image,
  userName,
  name = false,
  profession = false,
  width = 50,
}) => {
  return (
    <div
      className={styles.container}
      // style={{
      //   width: name ? "auto" : `${width}px`,
      // }}
    >
      <div
        className={styles.image}
        style={{ width: `${width}px`, height: `${width}px` }}
      >
        <img src={imageUrl} alt="Avatar" className={styles.avatarImage} />
      </div>
      {name !== false && (
        <div className={styles.userInfo}>
          <h3>{userName}</h3>
          <p>Autor de la publicación</p>
        </div>
      )}
    </div>
  );
};

export default Avatar;
