import styles from '../styles/Footer.module.css';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.infoSection}>
        <div className={styles.container}>
          <div className={styles.infoColumn}>
            <h3>STEPSHOES</h3>
            <p>Quito, Ecuador</p>
            <p>stepshoes@gmail.com</p>
            <p>+593 987-321-654</p>
          </div>
          <div className={styles.infoColumn}>
            <h3>Servicios</h3>
            <ul>
              <li>Asesoría</li>
              <li>Personalización</li>
              <li>Atención al Cliente</li>
            </ul>
          </div>
          <div className={styles.infoColumn}>
            <h3>Modelos</h3>
            <ul>
              <li>Nike / Jordan</li>
              <li>Adidas</li>
              <li>Más</li>
            </ul>
          </div>
          <div className={styles.infoColumn}>
            <h3>Redes Sociales</h3>
            <ul>
              <li>Instagram</li>
              <li>TikTok</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© 2025 StepSHOES. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;