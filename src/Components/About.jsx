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
          Industry and break some ground. I have been always fond of technology
          and gadgets. but it took some time to found my calling to software
          development. I have always liked to play with technology and now I
          have learned not just to play with it, but play with it correctly and
          build something meaningful out of it. In last six months I have been
          doing just that. Its a daily hustle that my mind and body has been
          used to and Its what I enjoy and love so much. Every time I see a
          problem that challenges me, I know that's what I am here for.
          <br />
          <br />
        </p>
        <a href={Pdf} target="_blank" rel="noreferrer" className={styles.link}>
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
