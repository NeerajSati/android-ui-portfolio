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
import { ReactComponent as TetrisIcon } from "../assets/Tetris.svg";
import OverlayApp from "./OverlayApp";
import OverlaySocials from "./OverlaySocials";
import OverlayGallery from "./OverlayGallery";
import RecentsOverlay from "./RecentsOverlay";

function Screen() {
  const [time, setTime] = useState(getTime);
  const [recents, setRecents] = useState([]);
  const [openScreen, setOpenScreen] = useState("");
  const [showRecents, setShowRecents] = useState(false);

  const handleScreenChange = (screen, strength) => {
    setShowRecents(false);
    if (strength && "vibrate" in navigator) {
      navigator.vibrate(strength);
    }
    setTimeout(() => {
      setOpenScreen(screen);
      if (screen) {
        let allData = recents.filter((app) => app !== screen);
        setRecents([screen, ...allData]);
      }
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
      case "tetris":
        return (
          <OverlayApp url="https://tetris-by-neeraj.netlify.app/" whiteBg />
        );
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

  const listedHomeApps = [
    {
      name: "portfolio",
      icon: <AboutIcon />,
    },
    {
      name: "tetris",
      icon: <TetrisIcon />,
      customClass: Styles.tetrisIcon,
    },
    {
      name: "gallery",
      icon: <GalleryIcon />,
    },
  ];

  const listedPopularApps = [
    {
      name: "memorizer",
      icon: <GameIcon />,
    },
    {
      name: "blogspot",
      icon: <BlogIcon />,
      customClass: Styles.consoleIcon,
    },
    {
      name: "socials",
      icon: <ContactsIcon />,
      customClass: Styles.contactsIcon,
    },
    {
      name: "chat",
      icon: <MessagingIcon />,
      customClass: Styles.messageIcon,
    },
  ];

  useEffect(() => {
    const clock = setInterval(() => {
      const newTime = getTime();
      if (newTime !== time) setTime(newTime);
    }, 15000);

    return () => clearInterval(clock);
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
          <div className={clsx(Styles.googleIcon, Styles.googleIconSmall)}>
            <GoogleGIcon />
          </div>
          <div className={Styles.search}> Google</div>
          <div className={Styles.mic}>
            <MicIcon />
          </div>
        </button>
        <div className={Styles.appsContainer}>
          {listedHomeApps.map((app) => (
            <button
              key={app.name}
              className={clsx(Styles.appIcon, app.customClass)}
              onClick={() => handleScreenChange(app.name, 50)}
            >
              {app.icon}
            </button>
          ))}
        </div>
        <div className={Styles.bottomBar}>
          {listedPopularApps.map((app) => (
            <button
              key={app.name}
              className={clsx(Styles.appIcon, app.customClass)}
              onClick={() => handleScreenChange(app.name, 50)}
            >
              {app.icon}
            </button>
          ))}
        </div>
        {getActiveScreen(openScreen)}
        {showRecents && (
          <RecentsOverlay
            setShowRecents={setShowRecents}
            recents={recents}
            handleScreenChange={handleScreenChange}
          />
        )}
      </div>
      <div className={Styles.buttons}>
        <button
          className={Styles.activeTabs}
          onClick={() => setShowRecents(!showRecents)}
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
