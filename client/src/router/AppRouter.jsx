import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/signUp/SignUp";
import Dashboard from "../pages/dashboard/Dashboard";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import Mern from "../pages/mern/Mern";
const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PublicRoutes />}>
          <Route index element={<Mern />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>

        <Route path="/private" element={<PrivateRoutes />}>
          <Route index element={<Mern />} />
          <Route path="/private/dashboard" element={<Dashboard />} />
        </Route>

        {/* <Route path="/mern" element={<Mern />} /> */}
      </Routes>
    </>
  );
};

export default AppRouter;

// <Route index element={<Home />} />
// <Route path="mern" element={<Mern />} />
// <Route path="mongodb" element={<MongoDB />} />
// <Route path="express" element={<Express />} />
// <Route path="react" element={<ReactView />} />
// <Route path="node" element={<NodeView />} />
// <Route path="createPost" element={<CreatePost />} />
// <Route path="sign-in" element={<SignIn />} />
// <Route path="sign-up" element={<SignUp />} />
