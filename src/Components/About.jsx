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
          energy and enthusiasm, looking to break into the Software Development
          Industry and break some ground.
          <br />
          <br />
        </p>
        <a
          href={Pdf}
          target="_blank"
          rel="noreferrer"
          style={{ fontSize: "150%" }}
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