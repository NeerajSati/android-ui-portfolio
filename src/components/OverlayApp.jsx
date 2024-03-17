import React, { useEffect } from "react";
import Styles from "../styles/screen.module.scss";

function OverlayApp({ url }) {
  useEffect(() => {}, []);
  return (
    <div className={`${Styles.overlayApp}`}>
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
