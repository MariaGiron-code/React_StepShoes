import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../styles/Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Cliente');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Simula que ya está autenticado si hay un email en el estado
    if (email && password) {
      navigate('/reservaProducto');
    }
  }, [email, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    const testEmail = 'mary@gmail.com';
    const testPassword = '1234';

    if (email === testEmail && password === testPassword) {
      navigate('/reservaProducto'); // Redirige a /reserva al login exitoso
    } else {
      setError('Correo o contraseña incorrectos');
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