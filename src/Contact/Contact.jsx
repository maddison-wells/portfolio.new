import React from "react";
import styles from "./Contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contact__section}>
        <h1 className={styles.contact__title}>Let's work together.</h1>
        <p className={styles.contact__text}>
          As a junior full-stack developer, I'm enthusiastic about learning and
          collaborating on ambitious yet accessible projects.
        </p>
      </div>
      <div className={styles.contact__section}>
        <ul className={styles.contact__list}>
          <li>
            <p>Email me</p>
            <h4>maddison.wells90@gmail.com</h4>
          </li>
          {/* <li>
            <p>Socials</p>
            <a
              className={styles.contact__socials}
              href="https://www.linkedin.com/in/maddison-wells-79895a102/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a
              className={styles.contact__socials}
              href="https://github.com/maddison-wells"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
