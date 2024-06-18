import React from 'react';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  // const location = useLocation();
  // const { message, tips, trainingPlan } = location.state;

  return (
    <div>
      <section className="header">
        <h1>Dashboard</h1>
      </section>
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