import React from 'react';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <p className={styles.footerText}>
          © 2023 Fake Store. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
