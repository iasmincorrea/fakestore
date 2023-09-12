import React from 'react';
import styles from './Showcase.module.css';
import Spot from './Spot';

const Showcase = ({ products }) => {
  return (
    <ul className={styles.showcase}>
      {products.map(({ id, image, title, price }) => (
        <Spot key={id} id={id} image={image} title={title} price={price} />
      ))}
    </ul>
  );
};

export default Showcase;
