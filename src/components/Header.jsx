import { NavLink } from 'react-router-dom';
import styles from '../styles/Header.module.css';
import { useEffect } from 'react';
const Header = () => {

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="StepShoes Logo" />
          <span>StepShoes</span>
        </div>
        <nav>
          <ul>
            <li><NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>Inicio</NavLink></li>
            <li><NavLink to="/nosotros" className={({ isActive }) => isActive ? styles.active : ''}>Nosotros</NavLink></li>
            <li><NavLink to="/servicios" className={({ isActive }) => isActive ? styles.active : ''}>Servicios</NavLink></li>
            <li><NavLink to="/galeria" className={({ isActive }) => isActive ? styles.active : ''}>Galería</NavLink></li>
            <li><NavLink to="/contactanos" className={({ isActive }) => isActive ? styles.active : ''}>Contactanos</NavLink></li>
            <li><NavLink to="/login" className={({ isActive }) => isActive ? styles.active : ''}>Login</NavLink></li>
          </ul>
        </nav>
        <div className={styles.cart}>
          <i className="fas fa-shopping-cart"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;