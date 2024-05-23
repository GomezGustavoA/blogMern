import { useDispatch, useSelector } from "react-redux";
import ViewPost from "../../component/viewpost/ViewPost";
import ViewPostComplete from "../../component/viewPostComplete/ViewPostComplete";
import styles from "./mern.module.css";

const Mern = () => {
  const posts = useSelector((state) => state.publication?.publication);

  return (
    <div className={styles.container}>
      {/* {post && <div>{<ViewPost post={post[5]} />}</div>} */}
      {/* {posts && <ViewPostComplete post={posts[5]} />} */}
      <h1>hola</h1>
    </div>
  );
};

export default Mern;
