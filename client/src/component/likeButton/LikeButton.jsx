import { useDispatch } from "react-redux";
import styles from "./likeBotton.module.css";
import Like from "../iconsSVG/Like";
import { getPosts, likePost } from "../../redux/publicationSlice";
import { likeComment } from "../../redux/commentSlice";
const LikeButton = ({ tooglePostorComment, likes, typePost }) => {
  const dispatch = useDispatch();
  const handleLikeClick = () => {
    dispatch(
      typePost
        ? likePost(tooglePostorComment)
        : likeComment(tooglePostorComment)
    )
      .then(() => {
        // Después de que se complete la acción likePost, obtén las publicaciones actualizadas
        dispatch(getPosts());
      })
      .catch((error) => {
        console.error("Error al dar like:", error);
      });
  };

  return (
    <div className={styles.container} onClick={handleLikeClick}>
      <div className={styles.like}>
        <Like fill={likes > 0 && "#4caf50"} />
      </div>
      {likes > 0 && (
        <div className={styles.countLikes}>
          <span>{likes}</span>
        </div>
      )}
    </div>
  );
};

export default LikeButton;
