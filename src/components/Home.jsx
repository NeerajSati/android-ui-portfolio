import React from "react";
import Screen from "./Screen";
import Styles from "./../styles/home.module.scss";
import { ReactComponent as DeviceLogo } from "../assets/Logo.svg";

function Home() {
  return (
    <div className={Styles.homePage}>
      <div className={Styles.mobile}>
        <div className={Styles.fade}></div>
        <div className={Styles.device}>
          <div className={Styles.speaker}>
            {new Array(10).fill(0).map((_, index) => (
              <div className={Styles.dot} key={index} />
            ))}
          </div>
          <div className={Styles.logo}>
            <DeviceLogo />
          </div>
          <div className={Styles.screenContainer}>
            <Screen />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
