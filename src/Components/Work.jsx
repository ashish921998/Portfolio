import React from "react";
import styles from "./Work.module.css";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { SiNextDotJs } from "react-icons/si";
import { Player } from "@lottiefiles/react-lottie-player";
import Navbar from "./Navbar";
import dineout from "../Images/1.png";
import medium from "../Images/medium.png";
// import happyfox from "../Images/happyfox.png";
import myhours from "../Images/myhours.png";
import sudoku from "../Images/sudoku.png";
import ecom from "../Images/ecom.png";
import sanj from "../Images/Sanj.png";

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

        <div className={styles.projects} style={{ marginTop: "10%" }}>
          <div>
            <h1>Sanjeevani</h1>
            <p>Help seeking and help providing webapp</p>
            <div>
              <SiNextDotJs className={styles.iconStyles} />
              <RiReactjsLine className={styles.iconStyles} />
              <SiMongodb className={styles.iconStyles} />
              <IoLogoJavascript className={styles.iconStyles} />
              <SiHtml5 className={styles.iconStyles} />
              <SiCss3 className={styles.iconStyles} />
              <FaNode className={styles.iconStyles} />
            </div>
            <div style={{ display: "flex" }}>
              <a
                href="https://github.com/therealdrtroll/sanjeevani"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <AiFillGithub />
                Code
              </a>
              <a
                href="https://sanj-front.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <FiExternalLink />
                Demo
              </a>
            </div>
          </div>

          <div className={styles.img}>
            <img src={sanj} alt="workImage" />
          </div>
        </div>
        <div className={styles.projects}>
          <div>
            <h1>Sudoku Solver</h1>
            <p>Sudoku solving webapp</p>
            <div>
              <RiReactjsLine className={styles.iconStyles} />
              <IoLogoJavascript className={styles.iconStyles} />
              <SiHtml5 className={styles.iconStyles} />
              <SiCss3 className={styles.iconStyles} />
            </div>
            <div style={{ display: "flex" }}>
              <a
                href="https://github.com/ashish921998/Soduko"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <AiFillGithub />
                Code
              </a>
              <a
                href="https://sudokuash.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <FiExternalLink />
                Demo
              </a>
            </div>
          </div>
          <div className={styles.img}>
            <img src={sudoku} alt="workImage" />
          </div>
        </div>

        <div className={styles.projects}>
          <div>
            <h1>Ecommerce </h1>
            <p>Ecommerce app built with react and Mock API</p>
            <div>
              <RiReactjsLine className={styles.iconStyles} />
              <IoLogoJavascript className={styles.iconStyles} />
              <SiHtml5 className={styles.iconStyles} />
              <SiCss3 className={styles.iconStyles} />
            </div>
            <div style={{ display: "flex" }}>
              <a
                href="https://github.com/ashish921998/React-Ecom-app"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <AiFillGithub />
                Code
              </a>
              <a
                href="https://ashishecom.netlify.app"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <FiExternalLink />
                Demo
              </a>
            </div>
          </div>
          <div className={styles.img}>
            <img src={ecom} alt="workImage" />
          </div>
        </div>

        <div className={styles.projects}>
          <div>
            <h1>Dineout Clone</h1>
            <p>Restaurant table booking platform</p>
            <div>
              <RiReactjsLine className={styles.iconStyles} />
              <SiMongodb className={styles.iconStyles} />
              <IoLogoJavascript className={styles.iconStyles} />
              <SiHtml5 className={styles.iconStyles} />
              <SiCss3 className={styles.iconStyles} />
              <FaNode className={styles.iconStyles} />
            </div>
            <div style={{ display: "flex" }}>
              <a
                href="https://github.com/ashish921998/Hexagon"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <AiFillGithub />
                Code
              </a>
              <a
                href="https://github.com/ashish921998/Hexagon"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <FiExternalLink />
                Demo
              </a>
            </div>
          </div>

          <div className={styles.img}>
            <img src={dineout} alt="workImage" />
          </div>
        </div>

        <div className={styles.projects}>
          <div>
            <h1>Medium Clone</h1>
            <p>Blogging website</p>
            <div>
              <RiReactjsLine className={styles.iconStyles} />
              <IoLogoJavascript className={styles.iconStyles} />
              <SiHtml5 className={styles.iconStyles} />
              <SiCss3 className={styles.iconStyles} />
            </div>
            <div style={{ display: "flex" }}>
              <a
                href="https://github.com/himrd95/Foxtrot"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <AiFillGithub />
                Code
              </a>
              <a
                href="https://medium-web.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <FiExternalLink />
                Demo
              </a>
            </div>
          </div>
          <div className={styles.img}>
            <img src={medium} alt="workImage" />
          </div>
        </div>

        <div className={styles.projects}>
          <div>
            <h1>Myhours Clone</h1>
            <p>Time management webapp</p>
            <div>
              <IoLogoJavascript className={styles.iconStyles} />
              <SiHtml5 className={styles.iconStyles} />
              <SiCss3 className={styles.iconStyles} />
            </div>
            <div style={{ display: "flex" }}>
              <a
                href="https://github.com/ashish921998/Fluorine"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <AiFillGithub />
                Code
              </a>
              <a
                href="https://github.com/ashish921998/Fluorine"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <FiExternalLink />
                Demo
              </a>
            </div>
          </div>

          <div className={styles.img}>
            <img src={myhours} alt="workImage" />
          </div>
        </div>

        {/* <div className={styles.projects}>
          <div>
            <h1>Happyfox Clone</h1>
            <a
              href="https://github.com/ashish921998/Boron"
              target="_blank"
              rel="noreferrer"
            >
              Software-as-a-service(SaaS) support platform
              <FiExternalLink />
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
        </div> */}
      </div>
    </div>
  );
}

export default Work;
