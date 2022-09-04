import React from "react";
import styles from "../../styles/Home.module.css";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <>
      <div className={styles.homePage}>
        <Navbar />
      </div>
    </>
  );
};

export default HomePage;
