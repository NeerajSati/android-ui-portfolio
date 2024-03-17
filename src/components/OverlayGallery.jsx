import React, { useState } from "react";
import clsx from "clsx";
import Styles from "./../styles/screen.module.scss";
import { ReactComponent as SkillsIcon } from "../assets/Skills.svg";
import { ReactComponent as ReactIcon } from "../assets/React.svg";
import { ReactComponent as NextIcon } from "../assets/Next.svg";
import { ReactComponent as NodeIcon } from "../assets/Node.svg";
import { ReactComponent as MongoIcon } from "../assets/Mongo.svg";
import { ReactComponent as RedisIcon } from "../assets/Redis.svg";
import { ReactComponent as ExpressIcon } from "../assets/Express.svg";

function OverlayGallery() {
  const [selected, setSelected] = useState("skills");
  return (
    <div className={Styles.overlayGallery}>
      <div className={Styles.header}>
        <div
          className={clsx(Styles.projectsIcon, {
            [Styles.selected]: selected === "skills",
          })}
          onClick={() => setSelected("skills")}
        >
          <SkillsIcon />
          Skills
        </div>
      </div>
      <div className={Styles.galleryContent}>
        <div className={Styles.galleryContentSection}>
          <div className={Styles.subHeader}>React Js</div>
          <div className={clsx(Styles.imageContainer, Styles.react)}>
            <ReactIcon />
          </div>
        </div>
        <div className={Styles.galleryContentSection}>
          <div className={Styles.subHeader}>Next Js</div>
          <div className={Styles.imageContainer}>
            <NextIcon />
          </div>
        </div>

        <div className={Styles.galleryContentSection}>
          <div className={Styles.subHeader}>Node Js</div>
          <div className={Styles.imageContainer}>
            <NodeIcon />
          </div>
        </div>

        <div className={Styles.galleryContentSection}>
          <div className={Styles.subHeader}>Express Js</div>
          <div className={Styles.imageContainer}>
            <ExpressIcon />
          </div>
        </div>
        <div className={Styles.galleryContentSection}>
          <div className={Styles.subHeader}>MongoDb</div>
          <div className={clsx(Styles.imageContainer, Styles.mongo)}>
            <MongoIcon />
          </div>
        </div>
        <div className={Styles.galleryContentSection}>
          <div className={Styles.subHeader}>Redis</div>
          <div className={Styles.imageContainer}>
            <RedisIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverlayGallery;
