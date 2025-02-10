import { useEffect, useState } from 'react';
import './PantryManagement.css';

const PantryManagement = () => {
  const [pantryItems, setPantryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPantryItems = async () => {
      try {
        const response = await fetch('/api/pantry');
        if (!response.ok) {
          throw new Error('Failed to fetch pantry items');
        }
        const data = await response.json();
        setPantryItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPantryItems();
  }, []);

  const handleUpdateStatus = async (itemId, newStatus) => {
    try {
      const response = await fetch(`/api/pantry/${itemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!response.ok) {
        throw new Error('Failed to update status');
      }
      const updatedItem = await response.json();
      setPantryItems((prevItems) =>
        prevItems.map((item) => (item.id === itemId ? updatedItem : item))
      );
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="pantry-management">
      <h1>Pantry Management</h1>
      <ul>
        {pantryItems.map((item) => (
          <li key={item.id}>
            {item.name} - Status: {item.status}
            <button onClick={() => handleUpdateStatus(item.id, 'Prepared')}>
              Mark as Prepared
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PantryManagement;