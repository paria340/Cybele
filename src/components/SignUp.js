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
      navigate('/dashboard', { state: response.data });
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <main>
      <div>
        <section className="header">
          <h1>Start your Run-Prep today!</h1>
        </section>
        <section className="formOptions">
          {step === 1 && (
            <form>
              <label>Your Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                className="name"
                size={15}
                onChange={handleInputChange}
                placeholder="Your name"
                required
              />
              <label>Your Date of Birth</label>
              <input
                type="date"
                id="dob"
                value={formData.dob}
                className="dob"
                size={15}
                onChange={handleInputChange}
                placeholder="YYYY-MM-DD"
                required
              />
              <label>Your Email</label>
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
              />
              <label>Your Password</label>
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
              />
              <button onClick={handleContinue}>Continue</button>
            </form>
          )}
          {step === 2 && (
            <form onSubmit={handleSubmit}>
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
              />
              <button type="submit">Submit</button>
            </form>
          )}
        </section>
      </div>
    </main>
  );
};

export default OnBoarding;