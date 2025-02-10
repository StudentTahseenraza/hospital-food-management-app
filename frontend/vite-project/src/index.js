export const Patient = {
    id: '',
    name: '',
    age: 0,
    gender: '',
    medicalHistory: [],
    dietaryRestrictions: [],
  };
  
  export const FoodChart = {
    id: '',
    patientId: '',
    meals: [],
  };
  
  export const Meal = {
    mealType: '',
    items: [],
    instructions: '',
  };
  
  export const PantryStaff = {
    id: '',
    name: '',
    role: '',
  };
  
  export const DeliveryPersonnel = {
    id: '',
    name: '',
    contactNumber: '',
    deliveryStatus: '',
  };