import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import styles from '../styles/Galeria.module.css';

const Galeria = () => {
  const productos = [
    { id: 1, nombre: 'Zapatilla Clásica', precio: '$50', imagen: '/public/imagenes/zapatilla_clasica.jpg' },
    { id: 2, nombre: 'Zapatilla Deportiva', precio: '$70', imagen: '/public/imagenes/zapatilla_deportiva.jpg' },
    { id: 3, nombre: 'Zapatilla Elegante', precio: '$90', imagen: '/public/imagenes/zapatilla_elegante.jpg' },
    { id: 4, nombre: 'Zapatilla Casual', precio: '$60', imagen: '/public/imagenes/zapatilla_casual.jpg' },
    { id: 5, nombre: 'Zapatilla Running', precio: '$80', imagen: '/public/imagenes/zapatilla_running.jpg' },
    { id: 6, nombre: 'Zapatilla Urbana', precio: '$65', imagen: '/public/imagenes/zapatilla_urbana.jpeg' },
  ];

  const navigate = useNavigate();
  const auth = getAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleReserve = (producto) => {
    if (!isAuthenticated) {
      navigate('/registro');
    } else {
      navigate('/reservaProducto', { state: { producto } });
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Galería de Productos Disponibles en nuestra tienda</h2>
      <div className={styles.grid}>
        {productos.map((producto) => (
          <div key={producto.id} className={styles.productCard}>
            <img src={producto.imagen} alt={producto.nombre} className={styles.productImage} />
            <div className={styles.productInfo}>
              <h3 className={styles.productName}>{producto.nombre}</h3>
              <p className={styles.productPrice}>{producto.precio}</p>
              <button className={styles.addButton} onClick={() => handleReserve(producto)}>Reservar</button>
            </div>
            <div className={styles.productDescription}>
              <p>Descripción breve del producto. Ideal para uso diario y actividades deportivas.</p>
              <p>Disponible en varias tallas y colores. ¡Haz tu reserva ahora!</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galeria;