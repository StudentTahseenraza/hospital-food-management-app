import { useEffect, useState } from 'react';
import './PatientDetails.css';

const PatientDetails = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/patients')
      .then((response) => response.json())
      .then((data) => {
        setPatients(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="patient-details">
      <h2>Patient Details</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            <strong>{patient.name}</strong> - Age: {patient.age}, Gender: {patient.gender}
            <div>
              <strong>Medical History:</strong> {patient.medicalHistory.join(', ')}
            </div>
            <div>
              <strong>Dietary Restrictions:</strong> {patient.dietaryRestrictions.join(', ')}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientDetails;