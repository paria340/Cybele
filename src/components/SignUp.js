import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateForm } from '../feature/form/formSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OnBoarding = () => {
  const [step, setStep] = useState(1);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formData = useSelector((state) => state.form);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    dispatch(updateForm({ [id]: value }));
  };

  const handleContinue = (event) => {
    event.preventDefault();
    setStep(step + 1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:2000/api/signup', formData);
      navigate('/', { state: response.data });
    } catch (error) {
      setErrorMessage('Error Signing Up');
      console.error('Error creating user:', error);
    }
  };

  return (
    <main style={styles.wrapper}>
      <header style={styles.header}>
        <h1 style={styles.title}>Start Your Run-Prep Today!</h1>
      </header>
      <section>
        {step === 1 && (
          <form style={styles.form} onSubmit={handleContinue}>
            <input
              type="text"
              id="name"
              value={formData.name}
              placeholder="Your Name"
              style={styles.input}
              onChange={handleInputChange}
              required
            />
            <input
              type="date"
              id="dob"
              value={formData.dob}
              placeholder="YYYY-MM-DD"
              style={styles.input}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              id="email"
              value={formData.email}
              placeholder="Your Email"
              style={styles.input}
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              id="password"
              value={formData.password}
              placeholder="Your Password"
              style={styles.input}
              onChange={handleInputChange}
              required
            />
            <button style={styles.button} type="submit">
              Continue
            </button>
          </form>
        )}
        {step === 2 && (
          <form style={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="distance" style={styles.label}>
              What distance are you prepping for?
            </label>
            <select
              id="distance"
              value={formData.distance}
              style={styles.input}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select Distance
              </option>
              <option value="5k">5k</option>
              <option value="10k">10k</option>
              <option value="half-marathon">Half-Marathon</option>
              <option value="marathon">Full-Marathon</option>
            </select>
            <label htmlFor="timeGoal" style={styles.label}>
              Preferred Running Time Goal
            </label>
            <input
              type="text"
              id="timeGoal"
              value={formData.timeGoal}
              placeholder="MM:SS"
              style={styles.input}
              onChange={handleInputChange}
              required
            />
            {errorMessage && <p style={styles.error}>{errorMessage}</p>}
            <button style={styles.button} type="submit">
              Submit
            </button>
          </form>
        )}
      </section>
    </main>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  },
  header: {
    marginBottom: '20px',
  },
  title: {
    fontSize: '28px',
    color: '#333',
    textAlign: 'center',
  },
  form: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
  },
  button: {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    width: '100%',
  },
  label: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '5px',
    display: 'block',
  },
  error: {
    color: '#ff4d4f',
    fontSize: '14px',
    marginBottom: '15px',
  },
};

export default OnBoarding;