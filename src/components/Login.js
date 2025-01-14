import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkBox, setCheckbox] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:2000/api/login', { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/', { state: response.data });
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleCheckboxChange = (e) => {
    setCheckbox(e.target.checked);
  };

  return (
    <main>
      <div style={styles.wrapper}>
        <section className="header">
          <h1 style={styles.title}>Login</h1>
        </section>
        <form onSubmit={handleLogin} style={styles.formOption}>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
            placeholder='Email'
            style={styles.input}
          />

          <input
            type="password"
            value={password}
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder='Password'
            style={styles.input}
          />

        <div style={styles.container}>
          <div style={styles.inputGroup}>
            <input
              type="checkbox"
              checked={checkBox}
              onChange={handleCheckboxChange}
              style={styles.checkbox}
              id="rememberMe"
            />
            <label htmlFor="rememberMe" style={styles.label}>
              Remember Me
            </label>
          </div>
          <a href="/forgotPassword" style={styles.link}>
            Forgot Password?
          </a>
        </div>
          <button style={styles.btnDefault} type="submit">Login</button>
        </form>
      </div>
    </main>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '70vh',
  },
  formOption: {
    display: 'flex',
    flexDirection: 'column',
    width: '400px',
    margin: '0 auto',
  },
  container: {
    width: '400px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputGroup: {
    display: 'flex',
    gap: '5px',
  },
  checkbox: {
    cursor: 'pointer',
  },
  label: {
    fontSize: '14px',
    color: '#333',
    cursor: 'pointer',
    paddingTop: '2px',
  },
  title: {
    fontSize: '32px',
  },
  link: {
    fontSize: '14px',
    color: '#007BFF',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  input: {
    margin: '5px 0 15px 0',
    padding: '10px',
    borderRadius: '5px',
    fontSize: '16px',
  },
  btnDefault: {
    width: '400px',
  }
};

export default Login;
