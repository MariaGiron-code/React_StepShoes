import { useState, useEffect } from 'react';

import styles from '../styles/Galeria.module.css';

const Galeria = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, 'products'));
      setProducts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchProducts();
  }, []);

  return (
    <main className={styles.main}>
      <section className={styles.galleryContainer}>
        {products.map(product => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.image} alt={product.name} className={styles.productImg} />
            <div className={styles.productInfo}>
              <h2>{product.name}</h2>
              <div className={styles.sizes}>
                <h3>Seleccione Talla</h3>
                <p>{product.sizes.join(' ')}</p>
              </div>
              <div className={styles.colors}>
                <h3>Colores</h3>
                <p>{product.colors}</p>
              </div>
              <button className={styles.btnVerMas}>Ver Más</button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Galeria;
