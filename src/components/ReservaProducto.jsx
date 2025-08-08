import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import styles from '../styles/ReservaProducto.module.css';

const ReservaProducto = () => {
  const [formData, setFormData] = useState({
    modelo: '',
    talla: '',
    nombre: '',
    email: ''
  });
  const [reservaId, setReservaId] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setFormData((prev) => ({ ...prev, email: user.email }));
      } else {
        setError('Debes iniciar sesión para hacer una reserva.');
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!auth.currentUser) {
      setError('Debes iniciar sesión para hacer una reserva.');
      navigate('/login');
      return;
    }

    try {
      const docRef = await addDoc(collection(db, 'reservas'), {
        modelo: formData.modelo.trim(),
        talla: formData.talla.trim(),
        nombre: formData.nombre.trim(),
        email: formData.email.trim(),
        fecha: new Date().toISOString(),
        userId: auth.currentUser.uid
      });

      setReservaId(docRef.id);
      alert('Reserva creada con éxito!');
    } catch (error) {
      if (error.code === 'permission-denied') {
        setError('No tienes permisos para crear esta reserva. Contacta al administrador.');
      } else {
        setError('Error al crear la reserva: ' + error.message);
      }
    }
  };

  const handleDelete = () => {
    setReservaId(null);
    setFormData({ modelo: '', talla: '', nombre: '', email: formData.email });
    alert('Reserva eliminada localmente.');
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      setError('Error al cerrar sesión: ' + error.message);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Reservar Zapato</h2>
      {error && <p className={styles.error}>{error}</p>}
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
          <label>Nombre Completo del Cliente:</label>
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
            readOnly
          />
        </div>
        <button type="submit">Reservar</button>
        {reservaId && (
          <button
            type="button"
            onClick={handleDelete}
            className={styles.deleteButton}
          >
            Eliminar Reserva
          </button>
        )}
      </form>
      <button type="button" onClick={handleLogout} className={styles.logoutButton}>
        Salir
      </button>
    </div>
  );
};

export default ReservaProducto;