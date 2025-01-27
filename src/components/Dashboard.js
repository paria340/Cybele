import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!location.state || !location.state.user?._id) {
        setError('User ID is missing.');
        setLoading(false);
        return;
      }

      try {
        const userId = location.state.user._id;
        const response = await axios.get(`http://localhost:2000/api/users/${userId}`);
        setUserData(response.data);
      } catch (err) {
        console.error('Error fetching user data:', err);
        setError('Failed to load user data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [location.state]);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    navigate(`/calendar/${date.toISOString().slice(0, 10)}`);
  };

  if (loading) return <div style={styles.message}>Loading...</div>;
  if (error) return <div style={styles.message}>{error}</div>;

  return (
    <div style={styles.container}>
      <section style={styles.header}>
        <h1>Dashboard</h1>
      </section>
      {userData && (
        <>
          <h2 style={styles.message}>{userData.message}</h2>
          <h3 style={styles.sectionTitle}>Training Tips:</h3>
          <ul style={styles.list}>
            {userData.tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
          <h3 style={styles.sectionTitle}>Training Plan:</h3>
          <div style={styles.trainingPlan}>{userData.trainingPlan}</div>
          <div style={styles.calendarContainer}>
            <Calendar
              onClickDay={handleDateClick}
              value={selectedDate}
              maxDetail="month"
            />
          </div>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: '20px auto',
    maxWidth: '800px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  message: {
    fontSize: '20px',
    color: '#555',
    marginBottom: '20px',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '18px',
    color: '#333',
    margin: '15px 0 10px',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '20px',
    marginBottom: '20px',
  },
  calendarContainer: {
    marginTop: '30px',
    textAlign: 'center',
  },
  trainingPlan: {
    backgroundColor: '#fff',
    padding: '10px 15px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    color: '#444',
    fontSize: '16px',
    marginBottom: '20px',
  },
};

export default Dashboard;