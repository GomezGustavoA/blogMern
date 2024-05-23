import Layout from "./component/layout/Layout";
import "./App.css";
import { useEffect } from "react";
import { signForce } from "./redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./redux/publicationSlice";
import AppRouter from "./router/AppRouter";
import { useNavigate } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token && !user) {
      dispatch(getPosts());
      dispatch(signForce());
      navigate("/");
    }
  }, [user]);
  return (
    <>
      <Layout>
        <Home>
          <AppRouter />
        </Home>
      </Layout>
    </>
  );
}

export default App;
