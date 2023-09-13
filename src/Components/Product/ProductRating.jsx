import React from 'react';
import styles from './ProductRating.module.css';
import starFilledIcon from '../../Assets/star-filled.svg';
import starEmptyIcon from '../../Assets/star-empty.svg';

const ProductRating = ({ rating }) => {
  const { rate, count } = rating;

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <img
          key={`star-${i}`}
          src={i < rate ? starFilledIcon : starEmptyIcon}
          alt={i < rate ? 'Estrela Cheia' : 'Estrela Vazia'}
        />,
      );
    }
    return stars;
  };

  return (
    <div className={styles.rating}>
      {`${rate} de 5`}
      {renderStars()}
      <div className={styles.ratingInfo}>{`(${count})`}</div>
    </div>
  );
};

export default ProductRating;
