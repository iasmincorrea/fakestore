import React from 'react';
import styles from './Minicart.module.css';
import { Link } from 'react-router-dom';
import Close from '../../Assets/close.svg';
import MinicartItem from './MinicartItem';

const Minicart = ({
  onClose,
  cartItems,
  removeFromCart,
  updateCartItemQuantity,
}) => {
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

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
        {cartItems.length > 0 ? (
          <>
            <p className={styles.minicartTitle}>Meu Carrinho</p>
            <div className={styles.minicartGrid}>
              <ul className={styles.minicartItems}>
                {cartItems.map(({ id, image, title, price, quantity }) => (
                  <MinicartItem
                    key={id}
                    image={image}
                    title={title}
                    price={price}
                    quantity={quantity}
                    updateCartItemQuantity={(newQuantity) =>
                      updateCartItemQuantity(id, newQuantity)
                    }
                    onDelete={() => removeFromCart(id)}
                  />
                ))}
              </ul>
              <div className={styles.minicartBottom}>
                <div className={styles.minicartTotal}>
                  <p>TOTAL</p>
                  <p>R$ {totalPrice.toLocaleString('pt-BR')}</p>
                </div>
                <Link className={styles.minicartFinish} to="/checkout">
                  Finalizar compra
                </Link>
                <button className={styles.minicartContinue} onClick={onClose}>
                  Continuar comprando
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className={styles.cartEmpty}>
            <p className={styles.emptyText}>Seu carrinho está vazio</p>
            <button className={styles.minicartFinish} onClick={onClose}>
              Continuar comprando
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Minicart;
