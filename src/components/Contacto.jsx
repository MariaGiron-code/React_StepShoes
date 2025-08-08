import { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import styles from '../styles/Contacto.module.css';

const Contacto = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess('');
    setError('');

    try {
      await addDoc(collection(db, 'messages'), {
        ...formData,
        timestamp: new Date().toISOString(),
        date: new Date().toLocaleString('es-EC', { timeZone: 'America/Guayaquil' })
      });
      setSuccess('Mensaje enviado con éxito');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      setError('Error al enviar el mensaje. Inténtalo de nuevo.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className={styles.mainContacto}>
      <div className={styles.contactoHeader}>
        <h1>CONTACTO</h1>
      </div>
      <div className={styles.contactInfo}>
        <p><i className="fas fa-map-marker-alt"></i> Quito, Ecuador</p>
        <p><i className="fas fa-phone"></i> +593-987-321-654</p>
        <p><i className="fas fa-envelope"></i> stepshoes@gmail.com</p>
        <p><i className="fas fa-clock"></i> Lunes - Sábado 08:00-19:00</p>
      </div>
      <div className={styles.location}>
        <h2>Ubicación</h2>
        <div className={styles.mapContainer}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9154.688264629824!2d-78.50457673897806!3d-0.20540377331623902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a1665089e47%3A0x48402f6dec8c8ff6!2sZurita%20Shoes%20Co.!5e0!3m2!1ses-419!2sec!4v1754663650122!5m2!1ses-419!2sec" 
            width="100%" 
            height="400" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className={styles.contactForm}>
        <h2>Envíanos un mensaje</h2>
        <div className={styles.contactFormContainer}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                placeholder="Nombres"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="subject"
                placeholder="Asunto"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <textarea
                name="message"
                placeholder="Mensaje"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Enviar Mensaje</button>
          </form>
          {success && <p className={styles.success}>{success}</p>}
          {error && <p className={styles.error}>{error}</p>}
        </div>
      </div>
    </main>
  );
};

export default Contacto;