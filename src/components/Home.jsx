import styles from '../styles/Home.module.css';
import { useEffect } from 'react';
const Home = () => {
  useEffect(() => {
    document.title = 'StepSHOES - Inicio';
  }, []);
  return (
    <>
      <section className={styles.banner}>
        <div className={styles.bannerImagenes}>
          {/* Carrusel de imágenes */}
        </div>
        <p className={styles.fraseBanner}>
          "¡Donde cada paso cuenta... ¡y cada sneaker hace la diferencia!" 👟🔥
        </p>
      </section>
      <section className={styles.bienvenida}>
        <div className={styles.cajaBienvenida}>
          <h2>¡Bienvenido/a a StepSHOES! 👟🔥</h2>
          <p>
            En StepSHOES, no solo vendemos sneakers; vendemos estilo, actitud y confianza para cada paso que das.
            Somos apasionados por la cultura urbana, las ediciones limitadas y el diseño que hace volar tu personalidad.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;