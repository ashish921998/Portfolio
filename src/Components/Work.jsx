import React from "react";
import styles from "./Work.module.css";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { FaNode } from "react-icons/fa";
// import { AiFillGithub } from "react-icons/ai";
import { Player } from "@lottiefiles/react-lottie-player";
import Navbar from "./Navbar";
import dineout from "../Images/1.png";
import medium from "../Images/medium.png";
import happyfox from "../Images/happyfox.png";
import myhours from "../Images/myhours.png";

function Work() {
  return (
    <div>
      <Navbar />
      <div className={styles.main}>
        <div>
          <Player
            className={styles.lot}
            autoplay
            loop
            src="https://assets3.lottiefiles.com/packages/lf20_vwx4m8ut.json"
          ></Player>
        </div>

        <div style={{ marginTop: "10%" }} className={styles.projects}>
          <div>
            <h1>Dineout Clone</h1>
            <a
              href="https://github.com/ashish921998/Hexagon"
              target="_blank"
              rel="noreferrer"
            >
              Restaurant table booking platform
            </a>
            <div>
              <RiReactjsLine className={styles.iconStyles} />
              <SiMongodb className={styles.iconStyles} />
              <IoLogoJavascript className={styles.iconStyles} />
              <SiHtml5 className={styles.iconStyles} />
              <SiCss3 className={styles.iconStyles} />
              <FaNode className={styles.iconStyles} />
            </div>
          </div>

          <div className={styles.img}>
            <img src={dineout} alt="workImage" />
          </div>
        </div>

        <div className={styles.projects}>
          <div>
            <h1>Medium Clone</h1>
            <a
              href="https://github.com/ashish921998/Foxtrot"
              target="_blank"
              rel="noreferrer"
            >
              Blogging website
            </a>
            <div>
              <RiReactjsLine className={styles.iconStyles} />
              <IoLogoJavascript className={styles.iconStyles} />
              <SiHtml5 className={styles.iconStyles} />
              <SiCss3 className={styles.iconStyles} />
            </div>
          </div>
          <div className={styles.img}>
            <img src={medium} alt="workImage" />
          </div>
        </div>

        <div className={styles.projects}>
          <div>
            <h1>Myhours Clone</h1>
            <a
              href="https://github.com/ashish921998/Fluorine"
              target="_blank"
              rel="noreferrer"
            >
              Time management webapp
            </a>
            <div>
              <IoLogoJavascript className={styles.iconStyles} />
              <SiHtml5 className={styles.iconStyles} />
              <SiCss3 className={styles.iconStyles} />
            </div>
          </div>

          <div className={styles.img}>
            <img src={myhours} alt="workImage" />
          </div>
        </div>

        <div className={styles.projects}>
          <div>
            <h1>Happyfox Clone</h1>
            <a
              href="https://github.com/ashish921998/Boron"
              target="_blank"
              rel="noreferrer"
            >
              Software-as-a-service(SaaS) support platform
            </a>
            <div>
              <IoLogoJavascript className={styles.iconStyles} />
              <SiHtml5 className={styles.iconStyles} />
              <SiCss3 className={styles.iconStyles} />
            </div>
          </div>
          <div className={styles.img}>
            <img src={happyfox} alt="workImage" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
