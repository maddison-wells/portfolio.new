import React from "react";
import styles from "./Card.module.scss";

const Card = ({ title, img, link, description, backgroundColor }) => {
  const cardStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <div className={styles.card} style={cardStyle}>
      <img className={styles.card__img} src={img} alt={title} />
      <h2>{title}</h2>
      <a className={styles.card__link} href={link}>
        View
      </a>
      <p>{description}</p>
    </div>
  );
};

export default Card;
