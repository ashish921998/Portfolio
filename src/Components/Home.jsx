import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <div>
      <div className={styles.names}>
        <Link to="/about" className={styles.about}>
          <h1 className={styles.h1cl}>Hello</h1>
        </Link>
        <Link to="/work" className={styles.work}>
          <h1 className={styles.h1cl}>I am</h1>
        </Link>
        <Link to="/contact" className={styles.contact}>
          <h1 className={styles.h1cl}>Ashish</h1>
        </Link>
      </div>
    </div>
  );
}

export default Home;
