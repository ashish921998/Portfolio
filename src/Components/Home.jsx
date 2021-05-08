import React from "react";
import styles from "./Home.module.css";
import { Player } from "@lottiefiles/react-lottie-player";

function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.first}>
        <a href="/about">
          <h1 className={styles.about}>
            <span>Hello</span>
          </h1>
        </a>
        <a href="/work">
          <h1 className={styles.work}>
            <span style={{ color: "red" }}>I am</span>
          </h1>
        </a>
        <a href="/contact">
          <h1 className={styles.contact}>
            <span style={{ color: "red" }}>Ashish</span>
          </h1>
        </a>
      </div>
      <div>
        <Player
          className={styles.lot}
          autoplay
          loop
          src="https://assets7.lottiefiles.com/packages/lf20_ubjxtskx.json"
        ></Player>
      </div>
    </div>
  );
}

export default Home;
