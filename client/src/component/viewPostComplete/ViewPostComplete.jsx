import React, { useEffect } from "react";
import styles from "./viewPostComplete.module.css";
import HTMLRenderer from "../avatarUser/HTMLRenderer";
import AddComment from "../addComment/AddComment";
import Avatar from "../avatarUser/AvatarUser";
import LikeButton from "../likeButton/LikeButton";
import ViewComment from "../viewComment/ViewComment";

function ViewPostComplete({ post }) {
  console.log(post);
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
        <LikeButton
          tooglePostorComment={post?._id}
          likes={post?.likes?.length}
          typePost={true}
        />
      </div>
      <div className={styles.addComment}>
        <AddComment publication={post?._id} />
      </div>
      <h3>Commentarios:</h3>
      <div className={styles.viewComment}>
        {post?.comment.map((comment) => (
          <ViewComment
            comment={comment.text}
            likeCount={comment?.likes?.length}
            id={comment._id}
          />
        ))}
      </div>
      {/* <ViewComment comment={post?.comment[1].text} /> */}
    </div>
  );
}

export default ViewPostComplete;
