import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from "./Contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [iconClicked, setIconClicked] = useState(false);

  const handleCopyEmail = () => {
    const email = "maddison.wells90@gmail.com";
    navigator.clipboard.writeText(email);
    setIconClicked(true);
  };

  return (
    <div className={styles.contact}>
      <div>
        <h1 className={styles.contact__title}>Let's work together.</h1>
        <p className={styles.contact__text}>
          As a junior full-stack developer, I'm enthusiastic about learning and
          collaborating on ambitious yet accessible projects.
        </p>
      </div>
      <div className={styles.contact__section}>
        <button
          className={`${styles.contact__btn} ${
            iconClicked ? styles.clicked : ""
          }`}
          onClick={handleCopyEmail}
        >
          <FontAwesomeIcon icon={faCopy} />
        </button>
        <ul className={styles.contact__list}>
          <li className={styles.contact__listItem}>
            <p>Email me</p>
            <h4 className={styles.contact__email}>
              maddison.wells90@gmail.com
            </h4>
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

ReactDOM.render(<Contact />, document.getElementById("root"));

export default Contact;
