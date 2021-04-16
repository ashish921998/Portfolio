import React from "react";
import { Link } from "react-router-dom";
import styles from "./contact.module.css";
import { Player } from "@lottiefiles/react-lottie-player";

function Contact() {
  return (
    <div>
      <Link className={styles.a} to="/">
        Ashish
      </Link>
      <div style={{ marginTop: "3%" }}>
        {/* <h1 className={styles.hcl}>Let's make </h1>

        <h1 className={styles.hcl}>Something Great</h1> */}

        <Player
          className={styles.lot}
          autoplay
          loop
          src="https://assets8.lottiefiles.com/packages/lf20_bp1bwvhv.json"
        ></Player>
      </div>
      <div className={styles.main}>
        <h1>Contact</h1>
        <p>
          I am seeking out my first Opportunity as a Software Development
          Engineer. I want to Bring my critical thinking and Problem solving
          attitude to the table and help in solving real business problems in a
          way that optimizes all of our respective experience and knowledge.
          <br />
          Feel free to reach out through any platforms below:
          <br />
          <br />
          <br />
        </p>
        <a
          href="mailto:ashish.hudar@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          ashish.hudar@gmail.com
        </a>
        <br />
        <a
          href="https://github.com/ashish921998"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <br />
        <a
          href="http://www.linkedin.com/in/ash921998"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <br />
        <a href="http://www.twitter.com" target="_blank" rel="noreferrer">
          Twitter
        </a>
        <br />
      </div>
    </div>
  );
}

export default Contact;
