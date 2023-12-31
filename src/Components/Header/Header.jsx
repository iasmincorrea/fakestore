import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

import Logo from '../../Assets/logo.png';
import Cart from '../../Assets/cartHeader.svg';
import MenuToggle from '../../Assets/MenuToggle.svg';
import Close from '../../Assets/close.svg';

const MenuItems = [
  { text: 'Item 01', link: '/' },
  { text: 'Item 02', link: '/' },
  { text: 'Item 03', link: '/' },
  { text: 'Item 04', link: '/' },
  { text: 'Item 05', link: '/' },
  { text: 'Item 06', link: '/' },
];

const Header = ({ openModal }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <button className={styles.menuToggle} onClick={toggleMenu}>
          <img
            src={isMenuOpen ? Close : MenuToggle}
            alt={isMenuOpen ? 'Ícone de fechar menu' : 'Ícone do menu'}
            title={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          />
        </button>

        <Link to="/">
          <img
            className={styles.logo}
            src={Logo}
            alt="Logo Fake Store"
            title="Fake Store"
            aria-label="Fake Store"
          />
        </Link>

        <ul className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
          {MenuItems.map(({ link, text }, index) => (
            <li className={styles.menuItem} key={index}>
              <Link className={styles.menuLink} to={link}>
                {text}
              </Link>
            </li>
          ))}
        </ul>

        <button className={styles.cart} onClick={() => openModal()}>
          <img
            src={Cart}
            alt="Ícone do carrinho"
            title="Abrir modal de carrinho"
            aria-label="Abrir modal de carrinho"
          />
          <p className={styles.cartText}>Cart</p>
        </button>
      </div>
    </header>
  );
};

export default Header;
