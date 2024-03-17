import { useEffect, useState } from "react";
import Styles from "./../styles/screen.module.scss";
import { ReactComponent as BackIcon } from "../assets/Back.svg";
import { ReactComponent as ActiveTabs } from "../assets/ActiveTabs.svg";
import { ReactComponent as BatteryIcon } from "../assets/Battery.svg";
import { ReactComponent as NetworkIcon } from "../assets/Network.svg";

function Screen() {
  const [time, setTime] = useState(getTime);

  function getTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return hours + ":" + minutes + " " + ampm;
  }

  useEffect(() => {
    setInterval(() => {
      const newTime = getTime();
      if (newTime !== time) setTime(newTime);
    }, 15000);
  }, []);

  return (
    <div className={Styles.screen}>
      <div className={Styles.display}>
        <div className={Styles.navigationBar}>
          <span className={Styles.network}>
            <NetworkIcon />
          </span>
          <span className={Styles.battery}>
            <BatteryIcon />
          </span>
          <span>{time}</span>
        </div>
        <div className={Styles.bottomBar}></div>
      </div>
      <div className={Styles.buttons}>
        <button
          className={Styles.activeTabs}
          onClick={() => navigator.vibrate(50)}
        >
          <ActiveTabs />
        </button>
        <button
          className={Styles.home}
          onClick={() => navigator.vibrate(100)}
        ></button>
        <button className={Styles.back} onClick={() => navigator.vibrate(50)}>
          <BackIcon />
        </button>
      </div>
    </div>
  );
}

export default Screen;
