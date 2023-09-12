import React from 'react';
import styles from './MinicartEmpty.module.css';

const MinicartEmpty = ({ onClose }) => {
  return (
    <div className={styles.empty}>
      <p className={styles.emptyText}>Seu carrinho está vazio</p>
      <button className={styles.emptyButton} onClick={onClose}>
        Continuar comprando
      </button>
    </div>
  );
};

export default MinicartEmpty;
