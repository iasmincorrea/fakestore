import React from 'react';

import styles from './Home.module.css';
import Showcase from '../Components/Showcase/Showcase';
import Error from '../Components/Helper/Error';
import Loading from '../Components/Helper/Loading';
import useFetch from '../Hooks/useFetch';
import { PRODUCTS_GET } from '../api';

const Home = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PRODUCTS_GET();
    request(url, options);
  }, [request]);

  if (error) return <Error />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className={styles.showcase}>
        <h1 className={styles.title}>Produtos</h1>
        <Showcase products={data} />
      </section>
    );
};

export default Home;
