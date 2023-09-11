import React from 'react';
import styles from './Minicart.module.css';

import { Link } from 'react-router-dom';
import Close from '../../Assets/close.svg';

const Minicart = ({ onClose }) => {
  return (
    <section className={styles.minicart}>
      <button className={styles.minicartClose} onClick={onClose}>
        <img
          src={Close}
          alt="Fechar o carrinho"
          title="Fechar o modal de Carrinho"
          aria-label="Fechar o modal de Carrinho"
        />
      </button>

      <div className={styles.minicartContainer}>
        <p className={styles.minicartTitle}>Meu Carrinho</p>

        <div className={styles.minicartGrid}>
          produtos
          <div className={styles.minicartBottom}>
            <div className={styles.minicartTotal}>
              <p>TOTAL</p>
              <p>R$</p>
            </div>
            <Link className={styles.minicartFinish} to="/checkout">
              Finalizar compra
            </Link>
            <button className={styles.minicartContinue} onClick={onClose}>
              Continuar comprando
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Minicart;
