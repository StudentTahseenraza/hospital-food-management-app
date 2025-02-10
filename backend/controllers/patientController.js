const patientService = require('../services/patientService');

// Create a new patient
const createPatient = async (req, res) => {
  try {
    const newPatient = await patientService.create(req.body);
    res.status(201).json(newPatient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all patients
const getAllPatients = async (req, res) => {
  try {
    const patients = await patientService.findAll();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific patient by ID
const getPatientById = async (req, res) => {
  try {
    const patient = await patientService.findOne(req.params.id);
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a patient by ID
const updatePatient = async (req, res) => {
  try {
    const updatedPatient = await patientService.update(req.params.id, req.body);
    res.status(200).json(updatedPatient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a patient by ID
const deletePatient = async (req, res) => {
  try {
    await patientService.remove(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPatient,
  getAllPatients,
  getPatientById,
  updatePatient,
  deletePatient,
};