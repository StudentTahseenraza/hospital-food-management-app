const Patient = require('../models/patientModel');

// Create a new patient
const create = async (patient) => {
  const newPatient = new Patient(patient);
  return await newPatient.save();
};

// Get all patients
const findAll = async () => {
  return await Patient.find();
};

// Get a specific patient by ID
const findOne = async (id) => {
  return await Patient.findById(id);
};

// Update a patient by ID
const update = async (id, updatedPatient) => {
  return await Patient.findByIdAndUpdate(id, updatedPatient, { new: true });
};

// Delete a patient by ID
const remove = async (id) => {
  return await Patient.findByIdAndDelete(id);
};

module.exports = {
  create,
  findAll,
  findOne,
  update,
  remove,
};