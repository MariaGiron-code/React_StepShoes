import styles from '../styles/Nosotros.module.css';
import { useEffect } from 'react';
const Nosotros = () => {
  useEffect(() => {
    document.title = 'StepSHOES - Nosotros';
  }, []);
  return (
    <main className={styles.main}>
      <section className={styles.nosotrosSection}>
        <div className={styles.fondoNosotros}>
          <div className={styles.cajaNosotros}>
            <h2>NOSOTROS</h2>
            <p>
              En StepShoes, nos dedicamos a ofrecerte las últimas tendencias en calzado urbano.
              Creemos que tus zapatillas deben hablar por ti y reflejar tu estilo único.
              Nuestra misión es brindarte una experiencia inigualable al comprar tus zapatillas favoritas.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Nosotros;