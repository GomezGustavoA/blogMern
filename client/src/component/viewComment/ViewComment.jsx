import React from "react";
import { useDispatch } from "react-redux";
import styles from "./viewComment.module.css";
import LikeButton from "../likeButton/LikeButton";

const ViewComment = ({ comment, likeCount, width, id }) => {
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(); // Suponiendo que tienes una acción "likeComment" en tu slice de comentarios
  };

  return (
    <div className={styles.container} style={{ width: `${width}px` }}>
      <div className={styles.comment}>
        <p>{comment}</p>
      </div>

      <div className={styles.likeButton}>
        <LikeButton
          tooglePostorComment={id}
          likes={likeCount}
          typePost={false}
        />
      </div>
    </div>
  );
};
export default ViewComment;
