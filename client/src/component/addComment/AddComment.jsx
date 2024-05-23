import React, { useEffect, useState } from "react";
import CustomInput from "../customInput/CustomImput";
import Comment from "../iconsSVG/Comment";
import SubmitButton from "../submitButton/SubmitButton";
import styles from "./addComment.module.css";
import { useDispatch } from "react-redux";
import { createComment } from "../../redux/commentSlice";
import { getPosts } from "../../redux/publicationSlice";

function AddComment({ publication }) {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const handleChange = (e) => {
    setComment(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createComment({ text: comment, publication }))
      .then(() => {
        // Después de que se complete la acción de crear el comentario,
        // restablecer el estado local del comentario a una cadena vacía
        setComment("");
        // Obtén las publicaciones actualizadas
        dispatch(getPosts());
      })
      .catch((error) => {
        console.error("Error al crear el comentario:", error);
      });
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
        <SubmitButton text={"Enviar"} width={80} height={40} />
      </div>
    </form>
  );
}

export default AddComment;
