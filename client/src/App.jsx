import { Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./component/layout/Layout";
import Home from "./pages/home/Home";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import "./App.css";
import { useEffect } from "react";
import { signForce } from "./redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./redux/publicationSlice";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(getPosts());
    if (token && !user) {
      dispatch(signForce());
      navigate("/");
    }
  }, [user]);
  return (
    <>
      <Layout>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
