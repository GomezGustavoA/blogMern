import { Routes, Route } from "react-router-dom";
import Layout from "./component/layout/Layout";
import Home from "./pages/home/Home";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";

import "./App.css";

function App() {
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
