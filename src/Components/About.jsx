import React from "react";
import styles from "./About.module.css";
import Pdf from "../Ashish Huddar.pdf";
import { Player } from "@lottiefiles/react-lottie-player";
import Navbar from "./Navbar";
import profile from "../Images/ProfilePic.jpg";

function About() {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "3%" }}>
        {/* <Player
          className={styles.lot}
          autoplay
          loop
          src="https://assets4.lottiefiles.com/packages/lf20_5k0romp3.json"
        ></Player> */}
        <img
          src={profile}
          alt="profile"
          style={{ borderRadius: "50%", width: "25%", margin: "1% 0 1% 38%" }}
        />
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
        <a href={Pdf} target="_blank" rel="noreferrer">
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
