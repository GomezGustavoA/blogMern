import React from "react";
import styles from "./inputPhoto.module.css";

function InputPhoto({ image, width, height }) {
  return (
    <div
      className={styles.container}
      style={{ height: `${height}px`, width: `${width}px` }}
    >
      <img src={image} alt="photo" />
    </div>
  );
}

export default InputPhoto;
