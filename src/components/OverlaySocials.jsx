import React, { useState } from "react";
import clsx from "clsx";
import Styles from "./../styles/screen.module.scss";
import { ReactComponent as ContactsIcon } from "../assets/Contacts.svg";
import { ReactComponent as LinkedinIcon } from "../assets/Linkedin.svg";
import { ReactComponent as GithubIcon } from "../assets/Github.svg";
import { ReactComponent as TwitterIcon } from "../assets/Twitter.svg";
import { ReactComponent as LeetcodeIcon } from "../assets/Leetcode.svg";
import { ReactComponent as GFGIcon } from "../assets/GFG.svg";
import { ReactComponent as CodechefIcon } from "../assets/Codechef.svg";
import { ReactComponent as CodeforcesIcon } from "../assets/Codeforces.svg";

function OverlaySocials() {
  const [selected, setSelected] = useState("contacts");
  return (
    <div className={Styles.overlaySocials}>
      <div className={Styles.header}>
        <div
          className={clsx(Styles.projectsIcon, {
            [Styles.selected]: selected === "projects",
          })}
          onClick={() => setSelected("projects")}
        >
          <ContactsIcon />
          Projects
        </div>
        <div
          className={clsx(Styles.socialIcon, {
            [Styles.selected]: selected === "contacts",
          })}
          onClick={() => setSelected("contacts")}
        >
          <ContactsIcon />
          Socials
        </div>
      </div>
      <div className={Styles.profileContent}>
        <div className={Styles.subHeader}> All Social Profiles</div>
        <a
          className={Styles.profileId}
          href="https://www.linkedin.com/in/neeraj-sati/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon />
          <span>Linkedin</span>
        </a>
        <a
          className={Styles.profileId}
          href="https://github.com/NeerajSati"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
          <span>Github</span>
        </a>
        <a
          className={Styles.profileId}
          href="https://twitter.com/satineeraj17"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
          <span>Twitter</span>
        </a>
        <div className={Styles.subHeader}> Coding Profiles</div>
        <a
          className={clsx(Styles.profileId, Styles.profileIdSmall)}
          href="https://leetcode.com/NeerajSati/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LeetcodeIcon />
          <span>Leetcode</span>
        </a>
        <a
          className={Styles.profileId}
          href="https://auth.geeksforgeeks.org/user/neerajsati"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GFGIcon />
          <span>Geeks For Geeks</span>
        </a>
        <a
          className={clsx(Styles.profileId, Styles.profileIdWhite)}
          href="https://www.codechef.com/users/neeraj_sati"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CodechefIcon />
          <span>Codechef</span>
        </a>
        <a
          className={clsx(Styles.profileId, Styles.profileIdScaled)}
          href="https://codeforces.com/profile/neeraj_sati"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CodeforcesIcon />
          <span>Codeforces</span>
        </a>
      </div>
    </div>
  );
}

export default OverlaySocials;
