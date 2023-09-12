import React, { useState } from 'react';
import styles from './MinicartItem.module.css';
import Delete from '../../Assets/delete.svg';
import MinicartQuantity from './MinicartQuantity';

const MinicartItem = ({
  image,
  title,
  price,
  onDelete,
  quantity,
  updateCartItemQuantity,
}) => {
  return (
    <li className={styles.item}>
      <img className={styles.itemImage} src={image} alt={title} />
      <div className={styles.itemInformation}>
        <div className={styles.itemTop}>
          <p className={styles.itemTitle}>{title}</p>
          <button className={styles.itemDelete} onClick={onDelete}>
            <img
              src={Delete}
              alt="Excluir produto do carrinho"
              title="Excluir produto do carrinho"
              aria-label="Excluir produto do carrinho"
            />
          </button>
        </div>
        <div className={styles.itemBottom}>
          <p className={styles.itemPrice}>R$ {price.toLocaleString('pt-BR')}</p>
          <MinicartQuantity
            value={quantity}
            onChange={updateCartItemQuantity}
          />
        </div>
      </div>
    </li>
  );
};

export default MinicartItem;
