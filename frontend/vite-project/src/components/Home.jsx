// import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Hospital Food Management System</h1>
      <div className="description">
        <p>
          The <strong>Hospital Food Management System</strong> is a comprehensive platform designed
          to streamline the management of patient diets, pantry inventory, and delivery personnel.
          Our system ensures that patients receive the right meals based on their dietary
          restrictions and medical history, while also optimizing pantry operations and delivery
          schedules.
        </p>
        <p>
          Key Features:
        </p>
        <ul>
          <li>Manage patient details and dietary requirements.</li>
          <li>Create and update food charts for patients.</li>
          <li>Track pantry inventory and manage pantry staff.</li>
          <li>Assign and monitor delivery personnel.</li>
        </ul>
        <p>
          Please <strong>login</strong> or <strong>signup</strong> to access the system.
        </p>
      </div>
    </div>
  );
};

export default Home;