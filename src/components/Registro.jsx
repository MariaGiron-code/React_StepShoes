import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import styles from '../styles/Registro.module.css';

const Registro = () => {
  const [name, setName] = useState('');
  const [cedula, setCedula] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const auth = getAuth();
  const db = getFirestore();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Create user with Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store additional user data in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        name: name.trim(),
        cedula: cedula.trim(),
        email: email.trim(),
        role: 'Cliente',
        createdAt: new Date().toISOString()
      });

      navigate('/login'); // Redirect to login page after successful registration
    } catch (err) {
      // Handle specific Firebase errors
      switch (err.code) {
        case 'auth/email-already-in-use':
          setError('El correo ya está registrado.');
          break;
        case 'auth/invalid-email':
          setError('El correo electrónico no es válido.');
          break;
        case 'auth/weak-password':
          setError('La contraseña debe tener al menos 6 caracteres.');
          break;
        default:
          setError('Error al registrar: ' + err.message);
      }
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