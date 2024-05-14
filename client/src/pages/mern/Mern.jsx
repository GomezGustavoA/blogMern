import { useSelector } from "react-redux";
import ViewPost from "../../component/viewpost/ViewPost";
import ViewPostComplete from "../../component/viewPostComplete/ViewPostComplete";
import styles from "./mern.module.css";

const Mern = () => {
  const post = useSelector((state) => state.publication?.publication);
  console.log(post);
  return (
    <div className={styles.container}>
      {/* {post && <div>{<ViewPost post={post[5]} />}</div>} */}
      {post && <ViewPostComplete post={post[5]} />}
    </div>
  );
};

export default Mern;
