import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import styles from '../styles/Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Cliente');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/reservaProducto'); 
    } catch (error) {
      if(error.code ) {
        setError('Usuario no registrado. Redirigiendo a registro...');
        setTimeout(() => navigate('/registro'), 2000); 
      }else if (error.code === 'auth/wrong-password') {
        setError('Contraseña incorrecta');
      } else {
        setError('Error al iniciar sesión: ' + error.message);
      }
    }
  };

  return (
    <main className={styles.main}>
      <section className={styles.loginSection}>
        <h2>LOGIN</h2>
        <div className={styles.underline}></div>
        <form className={styles.loginForm} onSubmit={handleLogin}>
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
          <div className={styles.formGroup}>
            <label>Rol</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option>Administrador</option>
              <option>Cliente</option>
            </select>
          </div>
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className={styles.btnIngresar}>Ingresar</button>
        </form>
        <div className={styles.registerLink}>
          <Link to="/registro">Registrarse</Link>
        </div>
      </section>
    </main>
  );
};

export default Login;