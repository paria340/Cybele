import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateForm } from '../feature/form/formSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OnBoarding = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    dispatch(updateForm({ [event.target.id]: event.target.value }));
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
    <main>
      <div>
        <section className="header">
          <h1>Start your Run-Prep today!</h1>
        </section>
        <section>
          {step === 1 && (
            <form style={styles.formOption}>
              <input
                type="text"
                id="name"
                value={formData.name}
                className="name"
                size={15}
                onChange={handleInputChange}
                placeholder="Your name"
                required
                style={styles.input}
              />
              <input
                type="date"
                id="dob"
                value={formData.dob}
                className="dob"
                size={15}
                onChange={handleInputChange}
                placeholder="YYYY-MM-DD"
                required
                style={styles.input}
              />
              <input
                type="email"
                id="email"
                value={formData.email}
                className="email"
                size={15}
                onChange={handleInputChange}
                placeholder="Your email"
                autoComplete="email"
                required
                style={styles.input}
              />
              <input
                type="password"
                id="password"
                value={formData.password}
                className="password"
                size={15}
                onChange={handleInputChange}
                autoComplete="current-password"
                placeholder="Your password"
                required
                style={styles.input}
              />
              <button onClick={handleContinue}>Continue</button>
            </form>
          )}
          {step === 2 && (
            <form onSubmit={handleSubmit} style={styles.formOption}>
              <label>What distance are you prepping for</label>
              <div className="selectWrapper">
                <select
                  id="distance"
                  value={formData.distance}
                  className="distance"
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>Select distance</option>
                  <option value="5k">5k</option>
                  <option value="10k">10k</option>
                  <option value="half-marathon">Half-Marathon</option>
                  <option value="marathon">Full-Marathon</option>
                </select>
                <i className="fas fa-chevron-down"></i>
              </div>
              <label>Preferred Running Time Goal</label>
              <input
                type="text"
                id="timeGoal"
                value={formData.timeGoal}
                className="timeGoal"
                pattern="^\d{1,2}:\d{2}$"
                onChange={handleInputChange}
                placeholder="MM:SS"
                required
                style={styles.input}
              />
              {errorMessage && (
                <div style={styles.errorMessage}>{errorMessage}</div>
              )}
              <button type="submit">Submit</button>
            </form>
          )}
        </section>
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
  errorMessage: {
    color: 'red',
    fontSize: '14px',
    fontWeight: 'bold',
    textAlign: 'left', 
    margin:'0 auto 10px auto',
  },
  formOption: {
    display: 'flex',
    flexDirection: 'column',
    width: '400px',
    margin: '0 auto',
    border: '1px solid black',
    padding: '60px 30px',
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
    border: '1px solid black',
  },
  btnDefault: {
    marginTop: '20px',
    width: '400px',
  }
};

export default OnBoarding;