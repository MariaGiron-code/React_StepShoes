import { useState } from 'react'; // Eliminamos useEffect
import { useNavigate } from 'react-router-dom';
import styles from '../styles/ReservaProducto.module.css';

const ReservaProducto = () => {
  const [formData, setFormData] = useState({
    modelo: '',
    talla: '',
    nombre: '',
    email: 'mary@gmail.com' // Email quemado consistente con Login
  });
  const [reservaId, setReservaId] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReservaId = `res_${Date.now()}`; // Simula un ID único
    setReservaId(newReservaId);
    alert('Reserva creada con éxito!');
  };

  const handleDelete = () => {
    setReservaId(null);
    setFormData({ modelo: '', talla: '', nombre: '', email: 'mary@gmail.com' });
    alert('Reserva eliminada con éxito!');
  };

  return (
    <div className={styles.container}>
      <h2>Reservar Zapato</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Modelo del Zapato:</label>
          <input
            type="text"
            name="modelo"
            value={formData.modelo}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Talla:</label>
          <input
            type="number"
            name="talla"
            value={formData.talla}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Nombre Completo:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            readOnly
          />
        </div>
        <button type="submit">Reservar</button>
        {reservaId && (
          <button type="button" onClick={handleDelete} className={styles.deleteButton}>
            Eliminar Reserva
          </button>
        )}
      </form>
      {reservaId && <p>Reserva ID: {reservaId}</p>}
    </div>
  );
};

export default ReservaProducto;