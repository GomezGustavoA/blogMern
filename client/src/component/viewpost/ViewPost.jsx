import React from "react";
import HTMLRenderer from "../avatarUser/HTMLRenderer";
import styles from "./viewPost.module.css";
import Chip from "../chip/Chip";

function ViewPost({ post }) {
  // Función para truncar el contenido HTML
  const truncateHTML = (htmlContent, maxLength) => {
    // Truncar la cadena de HTML si es más larga que maxLength
    if (htmlContent.length > maxLength) {
      return htmlContent.substring(0, maxLength) + "...";
    }
    return htmlContent;
  };

  // Truncar el contenido HTML antes de pasarlo al componente HTMLRenderer
  const truncatedHTML = truncateHTML(post.content, 35);

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={post?.image} alt="" />
        <div className={styles.chip}>
          <Chip label={post?.theme} />
        </div>
      </div>
      <div className={styles.title}>
        <h2>
          <span>{post?.title}</span>
        </h2>
      </div>
      <div className={styles.content}>
        <HTMLRenderer htmlContent={truncatedHTML} />
      </div>
    </div>
  );
}

export default ViewPost;
