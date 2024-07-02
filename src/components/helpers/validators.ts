import { form, errors, resetForm } from "./formHandler";
import { selectedRowId } from "./tableData";
import { useGuestStore } from "../../stores/guestList";
// Add or update a row in the table
export const submitForm = () => {
  const store = useGuestStore();
  // Validate the form
  errors.name = form.name ? "" : "Name is required.";

  const ageRegEx = /^(0|[1-9][0-9]?|100)$/;
  errors.age = form.age
    ? ageRegEx.test(form.age)
      ? ""
      : "Must be a valid age"
    : "Age is required.";

  const phoneNumberRegex = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/;
  errors.phone = form.phone
    ? phoneNumberRegex.test(form.phone)
      ? ""
      : "Valid Phone Number is required"
    : "Phone Number is required.";

  const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  errors.email = form.email
    ? emailRegEx.test(form.email)
      ? ""
      : "Must be a valid Email"
    : "Email is required.";

  const dobRegEx = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
  errors.dob = form.dob
    ? dobRegEx.test(form.dob)
      ? ""
      : "Valid Date of Birth format required DD/MM/YYYY"
    : "Date of Birth is required.";

  errors.department = form.department ? "" : "Please select a department";

  errors.mealPref = form.mealPref ? "" : "Please select a meal preference";

  errors.travelling = form.travelling
    ? ""
    : "Please select where you are trvelling from";

  // Check if there are any errors
  if (Object.values(errors).some((error) => error !== "")) {
    return;
  }

  if (selectedRowId.value === null) {
    console.log(1);

    store.addGuest({
      id: Date.now(),
      ...form,
    });
  } else {
    // Update existing row
    const row = store.guests.find((row) => row.id === selectedRowId.value);
    console.log(row);

    if (row) {
      Object.assign(row, form);
    }
    selectedRowId.value = null;
  }
  resetForm();
};
