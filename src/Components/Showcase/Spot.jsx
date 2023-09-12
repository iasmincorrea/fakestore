import React from 'react';
import styles from './Spot.module.css';
import { Link } from 'react-router-dom';

const Spot = ({ id, image, title, price }) => {
  return (
    <li className={styles.spot}>
      <Link to={`/produto/${id}`}>
        <img className={styles.spotImage} src={image} alt={title} />
        <p className={styles.spotTitle}>{title}</p>
        <p className={styles.spotPrice}>R$ {price.toLocaleString('pt-BR')}</p>
      </Link>
    </li>
  );
};

export default Spot;
