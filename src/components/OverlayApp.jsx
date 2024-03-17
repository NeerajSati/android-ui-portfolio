import React, { useEffect } from "react";
import clsx from "clsx";
import Styles from "../styles/screen.module.scss";

function OverlayApp({ url, whiteBg }) {
  useEffect(() => {}, []);
  return (
    <div
      className={clsx(Styles.overlayApp, {
        [Styles.whiteBg]: whiteBg,
      })}
    >
      <div className="">
        <iframe
          width="388"
          height="585"
          //   width="252"
          //   height="380"
          src={url}
          title="GeeksforGeeks"
        ></iframe>
      </div>
    </div>
  );
}

export default OverlayApp;
