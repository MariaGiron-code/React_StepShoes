import { useState } from 'react';

import styles from '../styles/Contacto.module.css';


const Contacto = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'messages'), formData);
      setSuccess('Mensaje enviado con éxito');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
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
            src="https://www.google.com/maps/embed?pb=..."
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
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
        </div>
      </div>
    </main>
  );
};

export default Contacto;