import React from "react";
import { Link } from "react-router-dom";
import styles from "./About.module.css";
import Pdf from "../Ashish Huddar.pdf";

function About() {
  return (
    <div>
      <Link className={styles.a} to="/">
        Ashish
      </Link>
      <div style={{ marginTop: "16%" }}>
        <h1 className={styles.hc}>I Develop, Deploy and </h1>
        <h1 className={styles.hc}>Maintain tech products</h1>
      </div>
      <div className={styles.main}>
        <h1>About</h1>
        <p>
          Hi, I am Ashish. I am a Passionate Full Stack Developer fueled by
          <br />
          energy and enthusiasm, looking to break into the Software Development
          Industry
          <br />
          and break some ground.
          <br />
          <br />I dont like to define mt
        </p>
        <a href={Pdf} target="_blank" rel="noreferrer">
          My Resume(pdf)
        </a>
      </div>
    </div>
  );
}

export default About;
