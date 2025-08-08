import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <>
      <section className={styles.banner}>
        <div className={styles.bannerImagenes}>
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/img/banner1.jpg"
                  className="d-block w-100"
                  alt="Banner 1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/img/banner2.jpg"
                  className="d-block w-100"
                  alt="Banner 2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/img/banner3.jpg"
                  className="d-block w-100"
                  alt="Banner 3"
                />
              </div>
            </div>
          </div>
        </div>

        <p className={styles.fraseBanner}>
          "¡Donde cada paso cuenta... ¡y cada sneaker hace la diferencia!" 👟🔥
        </p>
      </section>

      <section className={styles.bienvenida}>
        <div className={styles.cajaBienvenida}>
          <h2>¡Bienvenido/a a StepSHOES! 👟🔥</h2>
          <p>
            En StepSHOES, no solo vendemos sneakers; vendemos estilo, actitud y
            confianza para cada paso que das. Somos apasionados por la cultura
            urbana, las ediciones limitadas y el diseño que hace volar tu
            personalidad.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
