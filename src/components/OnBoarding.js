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
    dispatch(updateForm({ name: event.target.value }));
  };

  const handleDateChange = (event) => {
    dispatch(updateForm({ dob: event.target.value }));
  };

  const handleDistanceChange = (event) => {
    dispatch(updateForm({ distance: event.target.value }));
  };

  const handleTimeGoalChange = (event) => {
    const value = event.target.value;
    if (/^\d{0,2}:?\d{0,2}$/.test(value)) {
      dispatch(updateForm({ timeGoal: value }));
    }
  };

  const handleContinue = (event) => {
    event.preventDefault();
    setStep(step + 1);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    // Handle form submission
    try {
      const response = await axios.post('http://localhost:2000/api/users', formData);
      console.log(response.data);
      navigate('/dashboard', { state: response.data });
    } catch (_error) {
      console.error('Error creating user');
    }
  };
  return (
    <main>
      <div className="headerContainer">
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
              >
              </input>
              <label>Your Date of Birth</label>
              <input 
                type="date" 
                id="dob" 
                value={formData.dob} 
                className="dob" 
                size={15} 
                onChange={handleDateChange}
                placeholder="YYYY-MM-DD" 
                required
              >
              </input>
              <button onClick={handleContinue}>Continue</button>
            </form>
          )}
          {step === 2 && (
            <form onSubmit={handleSubmit}>
              <label>What distance are you prepping for</label>
              <div className='selectWrapper'>
                <select
                  id="distance"
                  value={formData.distance}
                  className="distance"
                  onChange={handleDistanceChange}
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
                onChange={handleTimeGoalChange}
                placeholder="MM:SS"
                required
              />
              <button type="submit">Submit</button>
            </form>
          )}
        </section>
      </div>
    </main>
  )
}

export default OnBoarding