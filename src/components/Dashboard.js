import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate  } from 'react-router-dom';
import axios from 'axios';
import Calendar from 'react-calendar';

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       // Replace with the actual user ID from your authentication system
  //       const userId = location.state.user._id;
  //       const response = await axios.get(`http://localhost:2000/api/users/${userId}`);
  //       setUserData(response.data);
  //     } catch (error) {
  //       console.error('Error fetching user data:', error);
  //     }
  //   };

  //   fetchUserData();
  // }, [location.state.user._id]);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    navigate(`/calendar/${date.toISOString().slice(0, 10)}`);
  };

  return (
    <div>
      <section className="header">
        <h1>Dashboard</h1>
      </section>
      <div className="calendar-container wrapper">
        <Calendar 
          onClickDay={handleDateClick} 
          value={selectedDate} maxDetail="month"
        />
      </div>
      {/* <h2>{message}</h2>
      <h3>Training Tips:</h3> */}
      {/* <ul>
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul> */}
      {/* <h3>Training Plan:</h3>
      <p>{trainingPlan}</p> */}
    </div>
  );
};

export default Dashboard;