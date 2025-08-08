import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Home = () => {
  return (
    <>
      <section className={styles.banner}>
        <div className={styles.bannerImagenes}>
          {/* Carrusel de imágenes */}
          <div id="sneakerCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/public/imagenes/imagen1.jpg" className="d-block w-100" alt="Sneaker 1" />
                <div className="carousel-caption d-none d-md-block">
                </div>
              </div>
              <div className="carousel-item">
                <img src="/public/imagenes/imagen2.jpg" className="d-block w-100" alt="Sneaker 2" />
                <div className="carousel-caption d-none d-md-block">
                </div>
              </div>
              <div className="carousel-item">
                <img src="/public/imagenes/imagen7.jpg" className="d-block w-100" alt="Sneaker 3" />
                <div className="carousel-caption d-none d-md-block">
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#sneakerCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#sneakerCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
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
            En StepSHOES, no solo vendemos sneakers; vendemos estilo, actitud y confianza para cada paso que das.
            Somos apasionados por la cultura urbana, las ediciones limitadas y el diseño que hace volar tu personalidad.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;