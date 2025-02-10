import { useState, useEffect } from 'react';
import './FoodChart.css';

const FoodChart = () => {
  const [newChart, setNewChart] = useState({ meal: '', instructions: '' });
  const [foodCharts, setFoodCharts] = useState([]);

  useEffect(() => {
    fetch('/api/food-charts')
      .then((response) => response.json())
      .then((data) => setFoodCharts(data));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewChart({ ...newChart, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/food-charts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newChart),
    })
      .then((response) => response.json())
      .then((data) => setFoodCharts([...foodCharts, data]));
  };

  return (
    <div className="food-chart">
      <h2>Food/Diet Charts</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="meal"
          value={newChart.meal}
          onChange={handleInputChange}
          placeholder="Meal"
          required
        />
        <input
          type="text"
          name="instructions"
          value={newChart.instructions}
          onChange={handleInputChange}
          placeholder="Instructions"
          required
        />
        <button type="submit">Add Food Chart</button>
      </form>
      <ul>
        {foodCharts.map((chart, index) => (
          <li key={index}>
            <strong>{chart.meal}</strong>: {chart.instructions}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodChart;