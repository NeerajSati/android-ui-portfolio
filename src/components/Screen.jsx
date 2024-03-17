import { useEffect, useState } from "react";
import clsx from "clsx";
import Styles from "./../styles/screen.module.scss";
import { ReactComponent as BackIcon } from "../assets/Back.svg";
import { ReactComponent as ActiveTabs } from "../assets/ActiveTabs.svg";
import { ReactComponent as BatteryIcon } from "../assets/Battery.svg";
import { ReactComponent as NetworkIcon } from "../assets/Network.svg";
import { ReactComponent as GoogleGIcon } from "../assets/GoogleG.svg";
import { ReactComponent as MicIcon } from "../assets/Mic.svg";
import { ReactComponent as GameIcon } from "../assets/Game.svg";
import { ReactComponent as BlogIcon } from "../assets/Blog.svg";
import { ReactComponent as MessagingIcon } from "../assets/Messaging2.svg";
import { ReactComponent as ContactsIcon } from "../assets/Contacts.svg";
import { ReactComponent as AboutIcon } from "../assets/About.svg";
import { ReactComponent as GalleryIcon } from "../assets/Gallery.svg";
import OverlayApp from "./OverlayApp";
import OverlaySocials from "./OverlaySocials";
import OverlayGallery from "./OverlayGallery";

function Screen() {
  const [time, setTime] = useState(getTime);
  const [openScreen, setOpenScreen] = useState("");
  console.log(openScreen);

  const handleScreenChange = (screen, strength) => {
    if (strength && "vibrate" in navigator) {
      navigator.vibrate(strength);
    }
    setTimeout(() => {
      setOpenScreen(screen);
    }, 200);
  };
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

  const getActiveScreen = (screen) => {
    switch (screen) {
      case "google":
        return <OverlayApp url="https://google-clone-neeraj.netlify.app/" />;
      case "memorizer":
        return <OverlayApp url="https://neerajsati.github.io/memorizer/" />;
      case "blogspot":
        return (
          <OverlayApp url="https://node-blogspot-neeraj.netlify.app/" whiteBg />
        );
      case "chat":
        return <OverlayApp url="https://chat-room-neeraj.netlify.app/" />;
      case "portfolio":
        return (
          <OverlayApp
            url="https://neeraj-sati-portfolio.netlify.app/"
            whiteBg
          />
        );
      case "socials":
        return <OverlaySocials />;
      case "gallery":
        return <OverlayGallery />;
      default:
        return "";
    }
  };

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
        <button
          className={Styles.googleBar}
          onClick={() => handleScreenChange("google", 50)}
        >
          <div className={Styles.icon}>
            <GoogleGIcon />
          </div>
          <div className={Styles.search}> Google</div>
          <div className={Styles.mic}>
            <MicIcon />
          </div>
        </button>
        <div className={Styles.appsContainer}>
          <button
            className={Styles.appIcon}
            onClick={() => handleScreenChange("portfolio", 50)}
          >
            <AboutIcon />
          </button>
          <button
            className={Styles.appIcon}
            onClick={() => handleScreenChange("gallery", 50)}
          >
            <GalleryIcon />
          </button>
        </div>
        <div className={Styles.bottomBar}>
          <button
            className={Styles.appIcon}
            onClick={() => handleScreenChange("memorizer", 50)}
          >
            <GameIcon />
          </button>
          <button
            className={clsx(Styles.appIcon, Styles.consoleIcon)}
            onClick={() => handleScreenChange("blogspot", 50)}
          >
            <BlogIcon />
          </button>
          <button
            className={clsx(Styles.appIcon, Styles.contactsIcon)}
            onClick={() => handleScreenChange("socials", 50)}
          >
            <ContactsIcon />
          </button>
          <button
            className={clsx(Styles.appIcon, Styles.messageIcon)}
            onClick={() => handleScreenChange("chat", 50)}
          >
            <MessagingIcon />
          </button>
        </div>
        {getActiveScreen(openScreen)}
      </div>
      <div className={Styles.buttons}>
        <button
          className={Styles.activeTabs}
          onClick={() => handleScreenChange("", 50)}
        >
          <ActiveTabs />
        </button>
        <button
          className={Styles.home}
          onClick={() => handleScreenChange("", 100)}
        ></button>
        <button
          className={Styles.back}
          onClick={() => handleScreenChange("", 50)}
        >
          <BackIcon />
        </button>
      </div>
    </div>
  );
}

export default Screen;
