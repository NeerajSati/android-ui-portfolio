import React, { useState } from "react";
import clsx from "clsx";
import Styles from "./../styles/screen.module.scss";
import { ReactComponent as GoogleGIcon } from "../assets/GoogleG.svg";
import { ReactComponent as GameIcon } from "../assets/Game.svg";
import { ReactComponent as BlogIcon } from "../assets/Blog.svg";
import { ReactComponent as MessagingIcon } from "../assets/Messaging2.svg";
import { ReactComponent as ContactsIcon } from "../assets/Contacts.svg";
import { ReactComponent as AboutIcon } from "../assets/About.svg";
import { ReactComponent as GalleryIcon } from "../assets/Gallery.svg";

function RecentsOverlay({ setShowRecents, recents, handleScreenChange }) {
  const [selected, setSelected] = useState("skills");
  const getAppIcon = (option) => {
    switch (option) {
      case "google":
        return (
          <span className={Styles.googleIcon}>
            <GoogleGIcon />
          </span>
        );
      case "memorizer":
        return <GameIcon />;
      case "blogspot":
        return <BlogIcon />;
      case "chat":
        return (
          <span className={Styles.messageIcon}>
            <MessagingIcon />
          </span>
        );
      case "portfolio":
        return <AboutIcon />;
      case "socials":
        return (
          <span className={Styles.contactsIcon}>
            <ContactsIcon />
          </span>
        );
      case "gallery":
        return <GalleryIcon />;
      default:
        return "";
    }
  };
  return (
    <div className={Styles.overlayRecents}>
      <div className={Styles.recentsContainer}>
        <div className={Styles.title}>Recent Apps</div>
        {recents.length > 0 ? (
          <div className={Styles.recentApps}>
            {recents.map((recent) => (
              <div
                key={recent}
                className={Styles.recentApp}
                onClick={() => handleScreenChange(recent)}
              >
                {getAppIcon(recent)}
              </div>
            ))}
          </div>
        ) : (
          <div className={Styles.noRecentApps}>No Apps opened!</div>
        )}
      </div>
      <button
        className={Styles.overlayRecentsBg}
        onClick={() => setShowRecents(false)}
      />
    </div>
  );
}

export default RecentsOverlay;
