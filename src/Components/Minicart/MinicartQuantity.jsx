import React from 'react';
import styles from './MinicartQuantity.module.css';
import ArrowPlus from '../../Assets/ArrowPlus.svg';
import ArrowLess from '../../Assets/ArrowLess.svg';

const MinicartQuantity = ({ value, onChange }) => {
  const handleIncrement = () => {
    onChange(value + 1);
  };

  const handleDecrement = () => {
    if (value > 1) {
      onChange(value - 1);
    }
  };

  return (
    <div className={styles.itemQuantity}>
      <input
        className={styles.quantityInput}
        type="text"
        value={value}
        readOnly
      />
      <div className={styles.quantityButtons}>
        <button className={styles.quantityButton} onClick={handleIncrement}>
          <img
            src={ArrowPlus}
            alt="Adicionar produto ao carrinho"
            title="Adicionar produto ao carrinho"
            aria-label="Adicionar produto ao carrinho"
          />
        </button>
        <button className={styles.quantityButton} onClick={handleDecrement}>
          <img
            src={ArrowLess}
            alt="Remover produto do carrinho"
            title="Remover produto do carrinho"
            aria-label="Remover produto do carrinho"
          />
        </button>
      </div>
    </div>
  );
};

export default MinicartQuantity;
