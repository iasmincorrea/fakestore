import React from 'react';
import styles from './ProductRating.module.css';
import starFilledIcon from '../../Assets/star-filled.svg';
import starEmptyIcon from '../../Assets/star-empty.svg';

const ProductRating = ({ rating }) => {
  const { rate, count } = rating;

  const renderStar = (filled, key) => (
    <img
      key={key}
      src={filled ? starFilledIcon : starEmptyIcon}
      alt={filled ? 'Estrela Cheia' : 'Estrela Vazia'}
    />
  );

  const renderStars = () => {
    const fullStars = Math.round(rate);
    const emptyStars = 5 - fullStars;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(renderStar(true, `star-${i}`));
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(renderStar(false, `star-${fullStars + i}`));
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
