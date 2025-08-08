import styles from '../styles/Galeria.module.css';

const Galeria = () => {
  // Array estático con 6 productos
  const productos = [
    { id: 1, nombre: 'Zapatilla Clásica', precio: '$50', imagen: 'https://via.placeholder.com/300x200?text=Producto+1' },
    { id: 2, nombre: 'Zapatilla Deportiva', precio: '$70', imagen: 'https://via.placeholder.com/300x200?text=Producto+2' },
    { id: 3, nombre: 'Zapatilla Elegante', precio: '$90', imagen: 'https://via.placeholder.com/300x200?text=Producto+3' },
    { id: 4, nombre: 'Zapatilla Casual', precio: '$60', imagen: 'https://via.placeholder.com/300x200?text=Producto+4' },
    { id: 5, nombre: 'Zapatilla Running', precio: '$80', imagen: 'https://via.placeholder.com/300x200?text=Producto+5' },
    { id: 6, nombre: 'Zapatilla Urbana', precio: '$65', imagen: 'https://via.placeholder.com/300x200?text=Producto+6' },
  ];

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
              <button className={styles.addButton}>Reservar </button>
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
