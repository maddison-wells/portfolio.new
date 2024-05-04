import React from "react";
import styles from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/logo-black.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const getLinkClassName = (path) => {
    return location.pathname === path
      ? `${styles.nav__link} ${styles.nav__active}`
      : styles.nav__link;
  };

  return (
    <div className={styles.nav}>
      <div className={styles.nav__details}>
        <Link to="/">
          <img className={styles.nav__image} src={logo} alt="Logo" />
        </Link>
        <p className={styles.nav__location}>
          Maddison Wells <br></br>Dharug Nation | Sydney
        </p>
      </div>
      <ul className={styles.nav__panel}>
        <li className={styles.nav__items}>
          <Link to="/" className={getLinkClassName("/")}>
            Home
          </Link>
        </li>
        <li className={styles.nav__items}>
          <Link to="/work" className={getLinkClassName("/work")}>
            Work
          </Link>
        </li>
        <li className={styles.nav__items}>
          <Link to="/about" className={getLinkClassName("/about")}>
            About
          </Link>
        </li>
        <li className={styles.nav__items}>
          <Link to="/contact" className={getLinkClassName("/contact")}>
            Contact
          </Link>
        </li>
        <li className={styles.nav__items}>
          <a
            className={styles.nav__itemsSocials}
            href="https://www.linkedin.com/in/maddison-wells-79895a102/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li className={styles.nav__items}>
          {" "}
          <a
            className={styles.nav__itemsSocials}
            href="https://github.com/maddison-wells"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
      <div>
        <a
          className={styles.nav__socials}
          href="https://www.linkedin.com/in/maddison-wells-79895a102/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          className={styles.nav__socials}
          href="https://github.com/maddison-wells"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
