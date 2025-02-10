import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import PatientDetails from './components/PatientDetails.jsx';
import FoodChart from './components/FoodChart.jsx';
import PantryManagement from './components/PantryManagement.jsx';
import DeliveryPersonnel from './components/DeliveryPersonnel.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Home from './components/Home.jsx';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {isLoggedIn && (
              <>
                <li>
                  <Link to="/patients">Patients</Link>
                </li>
                <li>
                  <Link to="/food-chart">Food Chart</Link>
                </li>
                <li>
                  <Link to="/pantry">Pantry</Link>
                </li>
                <li>
                  <Link to="/delivery-personnel">Delivery Personnel</Link>
                </li>
              </>
            )}
            {!isLoggedIn ? (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Signup</Link>
                </li>
              </>
            ) : (
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/patients"
            element={isLoggedIn ? <PatientDetails /> : <Navigate to="/login" />}
          />
          <Route
            path="/food-chart"
            element={isLoggedIn ? <FoodChart /> : <Navigate to="/login" />}
          />
          <Route
            path="/pantry"
            element={isLoggedIn ? <PantryManagement /> : <Navigate to="/login" />}
          />
          <Route
            path="/delivery-personnel"
            element={isLoggedIn ? <DeliveryPersonnel /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={<Login onLogin={handleLogin} />}
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;