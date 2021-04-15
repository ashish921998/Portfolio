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
          autoplay
          loop
          // src="https://assets7.lottiefiles.com/packages/lf20_nctfolkp.json"
          // src="https://assets4.lottiefiles.com/packages/lf20_csibz3jw.json"
          // src="https://assets1.lottiefiles.com/packages/lf20_ipmaglti.json"
          src="https://assets7.lottiefiles.com/packages/lf20_ubjxtskx.json"
          // src="https://assets7.lottiefiles.com/packages/lf20_mf4jsc3s.json"
          // src="https://assets4.lottiefiles.com/packages/lf20_5k0romp3.json"
          // src="https://assets3.lottiefiles.com/packages/lf20_vwx4m8ut.json"
          // src="https://assets9.lottiefiles.com/packages/lf20_ljd2bhbo.json"
          style={{ height: "500px", width: "500px", marginTop: 0 }}
        ></Player>
      </div>
    </div>
  );
}

export default Home;
