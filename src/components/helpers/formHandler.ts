import { reactive } from "vue";

// Define form data and table data
export const form = reactive({
  name: "",
  age: "",
  email: "",
  phone: "",
  dob: "",
  department: "",
  mealPref: "",
  travelling: "",
});

export const errors = reactive({
  name: "",
  age: "",
  email: "",
  phone: "",
  dob: "",
  department: "",
  mealPref: "",
  travelling: "",
});

// Reset form
export const resetForm = () => {
  form.name = "";
  form.age = "";
  form.email = "";
  form.phone = "";
  form.dob = "";
  form.department = "";
  form.mealPref = "";
  form.mealPref = "";
  errors.name = "";
  errors.age = "";
  errors.email = "";
  errors.phone = "";
  errors.dob = "";
  errors.department = "";
  errors.mealPref = "";
  errors.travelling = "";
};
