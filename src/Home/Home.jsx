import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";
import me from "../assets/me-bgwhite.png";

const Home = () => {
  return (
    <div className={styles.home}>
      <p className={styles.home__title}>
        Hi, my <br />
        name is <span>Maddison</span>
      </p>
      <p>
        I'm a <span>Junior Full-Stack Developer</span> from <br />
        Dharug Nation | Sydney
      </p>
      <img className={styles.home__img} src={me}></img>
      <div className={styles.background}></div>

      <Link to="/work" className={styles.link}>
        <p className={styles.home__title}>
          See my work{" "}
          <FontAwesomeIcon icon={faArrowRight} className={styles.arrowIcon} />
        </p>
      </Link>
    </div>
  );
};

export default Home;
