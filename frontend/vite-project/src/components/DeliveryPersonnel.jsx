import { useEffect, useState } from 'react';
import './DeliveryPersonnel.css';

const DeliveryPersonnel = () => {
  const [personnel, setPersonnel] = useState([]);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/delivery-personnel')
      .then((response) => response.json())
      .then((data) => {
        setPersonnel(data);
        setLoading(false);
      });
  }, []);

  const handleAddPersonnel = () => {
    const newPersonnel = { name };
    fetch('/api/delivery-personnel', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPersonnel),
    })
      .then((response) => response.json())
      .then((data) => {
        setPersonnel([...personnel, data]);
        setName('');
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="delivery-personnel">
      <h2>Delivery Personnel Management</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter personnel name"
      />
      <button onClick={handleAddPersonnel}>Add Personnel</button>
      <ul>
        {personnel.map((person, index) => (
          <li key={index}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DeliveryPersonnel;