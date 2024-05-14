import CustomInput from "../customInput/CustomImput";
import Comment from "../iconsSVG/Comment";
import LikeButton from "../likeButton/LikeButton";
import SubmitButton from "../submitButton/SubmitButton";
import styles from "./addComment.module.css";

import React, { useState } from "react";

function AddComment({ onSubmit }) {
  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(comment);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div className={styles.custominput}>
        <CustomInput
          icon={<Comment />}
          label="Ingresa tu comentario..."
          type="text"
          name="name"
          value={comment}
          onChange={handleChange}
          width={500}
          height={60}
          spaceIcon={20}
          spaceInput={80}
          required
        />
      </div>
      <div className={styles.btn}>
        <LikeButton />
        <SubmitButton text={"Enviar"} width={80} height={40} />
      </div>
    </form>
  );
}

export default AddComment;
