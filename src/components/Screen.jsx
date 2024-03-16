import React from "react";
import Styles from "./../styles/screen.module.scss";
import { ReactComponent as BackIcon } from "../assets/Back.svg";
import { ReactComponent as ActiveTabs } from "../assets/ActiveTabs.svg";

function Screen() {
  return (
    <div className={Styles.screen}>
      <div className={Styles.display}></div>
      <div className={Styles.buttons}>
        <button className={Styles.activeTabs}>
          <ActiveTabs />
        </button>
        <button className={Styles.home}></button>
        <button className={Styles.back}>
          <BackIcon />
        </button>
      </div>
    </div>
  );
}

export default Screen;
