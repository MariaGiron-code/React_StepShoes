import styles from '../styles/Servicios.module.css';
const Servicios = () => {
  return (
    <main className={styles.main}>
      <section className={styles.containerServicio}>
        <header>
          <h1>SERVICIOS</h1>
        </header>
        <div className={styles.servicio}>
          <img src='/public/imagenes/servicio1.jpg' alt='Servicio 1' />
          <h2>Asesoría Personalizada</h2>
          <p>
            Nuestro equipo de expertos está aquí para ayudarte a encontrar el par de zapatillas perfecto para ti.
            Pregúntanos cualquier duda y te daremos la mejor recomendación.
          </p>
        </div>
        <div className={styles.servicio}>
          <img src='/public/imagenes/servicio2.png' alt='Servicio 2' />
          <h2>Personalización</h2>
          <p>
            En StepSHOES, no solo calzas tus sueños…¡los diseñas! Con nuestro servicio de Personalización de Sneakers,
            conviértete en artista y dale vida a un par exclusivo que refleje tu esencia.
          </p>
        </div>
        <div className={styles.servicio}>
          <img src='/public/imagenes/servicio3.png' alt='Servicio 3' />
          <h2>Atención al Cliente</h2>
          <p>
            En StepSHOES, tu satisfacción es nuestra prioridad. Nuestro equipo de atención al cliente está listo para
            ayudarte con cualquier duda, desde tallas hasta seguimiento de pedidos, con un servicio rápido, humano y solucionador.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Servicios;