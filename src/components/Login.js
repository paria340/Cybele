import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

  return (
    <main>
      <div className="formOptions">
        <section className="header">
          <h1>Login</h1>
        </section>
        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </main>
  );
};

export default Login;
