import { Navigate, Route, Routes } from "react-router-dom";
import Mern from "../mern/Mern";
import Express from "../express/Express";
import MongoDB from "../mongoDB/MongoDB";
import ReactView from "../react/ReactView";
import NodeView from "../node/Node";
import Nav from "../../component/nav/Nav";
import styles from "./home.module.css";

const Home = () => {
  const navLinks = [
    { to: "/mern", text: "MERN" },
    { to: "/mongodb", text: "MongoDB" },
    { to: "/express", text: "Express" },
    { to: "/react", text: "React" },
    { to: "/node", text: "Node" },
  ];
  return (
    <section className={styles.homeContainer}>
      <div className={styles.nav}>
        <Nav links={navLinks} />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/mern" replace />} />
          <Route path="/mern" element={<Mern />} />
          <Route path="/mongodb" element={<MongoDB />} />
          <Route path="/express" element={<Express />} />
          <Route path="/react" element={<ReactView />} />
          <Route path="/Node" element={<NodeView />} />
          <Route path="*" element={<h2>no existe</h2>} />
        </Routes>
      </div>
    </section>
  );
};

export default Home;
