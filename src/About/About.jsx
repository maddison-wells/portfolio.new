import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faSass,
  faJs,
  faGit,
  faJava,
  faReact,
  faAws,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

import {
  faDatabase,
  faLeaf,
  faComputer,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./About.module.scss";

const About = () => {
  return (
    <div className={styles.about}>
      <p className={styles.about__text}>
        Hello there! I'm <span>Maddison</span>, coming from a background in
        finance, the idea of transitioning into a field full of learning,
        creativity, and innovation was too good to pass up. I've spent the last
        6 months working at _nology and found as a
        <span> junior full-stack developer</span>, I've thrived on challenging
        myself to learn new concepts and languages. I love to dabble in art when
        time permits, and I'm never far from a good book. If you're seeking a
        driven software engineer with a dash of creativity, let's connect and
        explore the exciting possibilities ahead!
      </p>

      <ul className={styles.skills__list}>
        <li className={styles.skills__listItem}>
          <FontAwesomeIcon className={styles.skills__icon} icon={faHtml5} />
          <span>HTML5</span>
        </li>
        <li className={styles.skills__listItem}>
          <FontAwesomeIcon className={styles.skills__icon} icon={faCss3Alt} />
          <span>CSS3</span>
        </li>
        <li className={styles.skills__listItem}>
          <FontAwesomeIcon className={styles.skills__icon} icon={faSass} />
          <span>SCSS/Sass</span>
        </li>
        <li className={styles.skills__listItem}>
          <FontAwesomeIcon className={styles.skills__icon} icon={faJs} />
          <span>JavaScript</span>
        </li>
        <li className={styles.skills__listItem}>
          <FontAwesomeIcon className={styles.skills__icon} icon={faGit} />
          <span>git</span>
        </li>
        <li className={styles.skills__listItem}>
          <FontAwesomeIcon className={styles.skills__icon} icon={faJava} />
          <span>Java</span>
        </li>
        <li className={styles.skills__listItem}>
          <FontAwesomeIcon className={styles.skills__icon} icon={faReact} />
          <span>ReactJS</span>
        </li>
        <li className={styles.skills__listItem}>
          <FontAwesomeIcon className={styles.skills__icon} icon={faAws} />
          <span>AWS</span>
        </li>
        <li className={styles.skills__listItem}>
          <FontAwesomeIcon className={styles.skills__icon} icon={faDatabase} />
          <span>SQL</span>
        </li>
        <li className={styles.skills__listItem}>
          <FontAwesomeIcon className={styles.skills__icon} icon={faLeaf} />
          <span>SpringBoot</span>
        </li>
        <li className={styles.skills__listItem}>
          <FontAwesomeIcon className={styles.skills__icon} icon={faGoogle} />
          <span>FireBase & FireStore</span>
        </li>
        <li className={styles.skills__listItem}>
          <FontAwesomeIcon className={styles.skills__icon} icon={faComputer} />
          <span>GraphQL</span>
        </li>
      </ul>
    </div>
  );
};

export default About;
