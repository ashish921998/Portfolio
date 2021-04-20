import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.nav}>
      <Link className={styles.a} to="/">
        Home
      </Link>
      <Link className={styles.a} to="/work">
        Work
      </Link>
      <Link className={styles.a} to="/about">
        About
      </Link>
      <Link className={styles.a} to="/contact">
        Contact
      </Link>
    </div>
  );
}

export default Navbar;
