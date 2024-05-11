import React from "react";
import Header from "../header/Header";
import styles from "./layout.module.css";
import Footer from "../footer/Footer";
import { ToastContainer } from "react-toastify";

const Layout = ({ children }) => {
  return (
    <div className={styles.LayoutContainer}>
      <Header />

      <main>
        {children}
        <ToastContainer />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
