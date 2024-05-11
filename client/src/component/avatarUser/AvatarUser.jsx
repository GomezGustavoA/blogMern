import React from "react";
import image from "../../../public/usuario.png";
import styles from "./avatarUser.module.css";

const Avatar = ({
  imageUrl = image,
  name = false,
  profession = false,
  width = 50,
}) => {
  return (
    <div
      className={styles.container}
      style={{
        width: name ? "auto" : `${width}px`,
      }}
    >
      <div
        style={{
          width: `${width}px`,
          aspectRatio: "1/1",
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        <img
          src={imageUrl}
          alt="Avatar"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      {name === false && (
        <div>
          <h3 style={{ margin: "0", marginBottom: "5px" }}>{name}</h3>
          <p style={{ margin: "0" }}>{profession}</p>
        </div>
      )}
    </div>
  );
};

export default Avatar;
