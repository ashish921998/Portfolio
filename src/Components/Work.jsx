import React from "react";
import { Link } from "react-router-dom";
import styles from "./Work.module.css";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { Player } from "@lottiefiles/react-lottie-player";

function Work() {
  let iconStyles = { margin: "1% 2% 0 0", fontSize: "2.5em" };
  return (
    <div>
      <Link className={styles.a} to="/">
        Ashish
      </Link>
      <div className={styles.main}>
        <div>
          <Player
            className={styles.lot}
            autoplay
            loop
            src="https://assets3.lottiefiles.com/packages/lf20_vwx4m8ut.json"
          ></Player>
        </div>

        <div style={{ marginTop: "10%" }}>
          <h1>Dineout Clone</h1>
          <h2>Restaurant table booking platform</h2>
          <div>
            <RiReactjsLine style={iconStyles} />
            <SiMongodb style={iconStyles} />
            <IoLogoJavascript style={iconStyles} />
            <SiHtml5 style={iconStyles} />
            <SiCss3 style={iconStyles} />
            <FaNode style={iconStyles} />
          </div>
        </div>

        <div className={styles.projects}>
          <h1>Medium Clone</h1>
          <h2>Blogging website</h2>
          <div>
            <RiReactjsLine style={iconStyles} />
            <IoLogoJavascript style={iconStyles} />
            <SiHtml5 style={iconStyles} />
            <SiCss3 style={iconStyles} />
          </div>
        </div>

        <div className={styles.projects}>
          <h1>Myhours Clone</h1>
          <h2>Time management webapp</h2>
          <div>
            <IoLogoJavascript style={iconStyles} />
            <SiHtml5 style={iconStyles} />
            <SiCss3 style={iconStyles} />
          </div>
        </div>

        <div className={styles.projects}>
          <h1>Happyfox Clone</h1>
          <h2>Software-as-a-service(SaaS) support platform</h2>
          <div>
            <IoLogoJavascript style={iconStyles} />
            <SiHtml5 style={iconStyles} />
            <SiCss3 style={iconStyles} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
