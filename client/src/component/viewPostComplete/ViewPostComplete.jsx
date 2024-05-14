import React from "react";
import styles from "./viewPostComplete.module.css";
import HTMLRenderer from "../avatarUser/HTMLRenderer";
import AddComment from "../addComment/AddComment";
import Avatar from "../avatarUser/AvatarUser";

function ViewPostComplete({ post }) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={post?.image} alt="" />
        <div className={styles.chip}>{/* <Chip label={post?.theme} /> */}</div>
      </div>
      <div className={styles.title}>
        <h2>
          <span>{post?.title}</span>
        </h2>
      </div>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <HTMLRenderer htmlContent={post.content} />
        </div>
      </div>

      <div className={styles.avatar}>
        <Avatar
          imageUrl={post?.author?.image}
          name={true}
          userName={post?.author?.userName}
        />
      </div>
      <div className={styles.addComment}>
        <AddComment />
      </div>
    </div>
  );
}

export default ViewPostComplete;
