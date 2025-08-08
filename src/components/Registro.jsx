import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Registro.module.css';

const Registro = () => {
  const [name, setName] = useState('');
  const [cedula, setCedula] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        name,
        cedula,
        email,
        role: 'Cliente'
      });
      navigate('/login');
    } catch (err) {
      setError('Error al registrar. Verifica los datos.');
    }
  };

  return (
    <main className={styles.main}>
      <section className={styles.registroSection}>
        <h2>REGISTRO</h2>
        <div className={styles.underline}></div>
        <form className={styles.registroForm} onSubmit={handleRegister}>
          <div className={styles.formGroup}>
            <label>Nombres y Apellidos</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Cédula</label>
            <input
              type="text"
              value={cedula}
              onChange={(e) => setCedula(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Correo</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className={styles.btnRegistrarse}>Registrarse</button>
        </form>
      </section>
    </main>
  );
};

export default Registro;