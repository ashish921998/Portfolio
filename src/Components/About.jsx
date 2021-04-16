import React from "react";
import { Link } from "react-router-dom";
import styles from "./About.module.css";
import Pdf from "../Ashish Huddar.pdf";
import { Player } from "@lottiefiles/react-lottie-player";

function About() {
  return (
    <div>
      <Link className={styles.a} to="/">
        Ashish
      </Link>
      <div style={{ marginTop: "8%" }}>
        {/* <h1 className={styles.hc}>I Develop, Deploy and </h1>
        <h1 className={styles.hc}>Maintain tech products</h1> */}
        <Player
          className={styles.lot}
          autoplay
          loop
          // src="https://assets7.lottiefiles.com/packages/lf20_nctfolkp.json"
          // src="https://assets4.lottiefiles.com/packages/lf20_csibz3jw.json"
          // src="https://assets1.lottiefiles.com/packages/lf20_ipmaglti.json"
          // src="https://assets7.lottiefiles.com/packages/lf20_mf4jsc3s.json"
          src="https://assets4.lottiefiles.com/packages/lf20_5k0romp3.json"
          // src="https://assets3.lottiefiles.com/packages/lf20_vwx4m8ut.json"
        ></Player>
      </div>
      <div className={styles.main}>
        <h1>About</h1>
        <p>
          Hi, I am Ashish. I am a Passionate Full Stack Developer fueled by
          energy and enthusiasm, looking to break into the Software Development
          Industry and break some ground.
          <br />
          <br />
        </p>
        <a
          href={Pdf}
          target="_blank"
          rel="noreferrer"
        >
          My Resume(pdf)
        </a>

        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default About;
