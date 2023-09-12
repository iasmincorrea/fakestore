import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styles from './Product.module.css';
import cartImage from '../Assets/cart.svg';

import useFetch from '../Hooks/useFetch';
import { PRODUCT_GET } from '../api';

import Head from '../Components/Header/Head';
import Error from '../Components/Helper/Error';
import Loading from '../Components/Helper/Loading';
import ProductRating from '../Components/Product/ProductRating';

const Product = ({ openModal, addToCart }) => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();
  const { title, image, rating, description, price } = data || {};

  useEffect(() => {
    const { url, options } = PRODUCT_GET(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Error />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section>
        <Head title={title} description={description} />
        <div className={styles.productContainer}>
          <div className={styles.productColumn}>
            <img className={styles.productImage} src={image} alt={title} />
          </div>
          <div className={styles.productInformation}>
            <h1 className={styles.productTitle}>{title}</h1>

            <ProductRating rating={rating} />

            <p className={styles.productPrice}>
              R$ {price.toLocaleString('pt-BR')}
            </p>

            <button
              className={styles.productButton}
              onClick={() => {
                addToCart(data);
                openModal();
              }}
            >
              <img src={cartImage} alt="Ícone de carrinho" />
              Adicionar ao carrinho
            </button>

            <div className={styles.productDescription}>
              <h2 className={styles.descriptionTitle}>Descrição</h2>
              <p className={styles.descriptionText}>{description}</p>
            </div>
          </div>
        </div>
      </section>
    );
  else return null;
};

export default Product;
