import styles from "./home.module.css";

const Home = ({ children }) => {
  return <section className={styles.homeContainer}>{children}</section>;
};

export default Home;
