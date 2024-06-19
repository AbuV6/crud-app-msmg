<script setup lang="ts">
import { ref, reactive, computed } from "vue";

// Define form data and table data
const form = reactive({
  name: "",
  age: "",
  email: "",
  phone: "",
  dob: "",
  department: "",
  mealPref: "",
  travelling: "",
});

const errors = reactive({
  name: "",
  age: "",
  email: "",
  phone: "",
  dob: "",
  department: "",
  mealPref: "",
  travelling: "",
});

const tableData = ref<
  {
    id: number;
    name: string;
    age: number;
    email: string;
    phone: number;
    dob: number;
    department: string;
    mealPref: string;
    travelling: string;
  }[]
>([]);

const selectedRowId = ref<number | null>(null);

// Add or update a row in the table
const submitForm = () => {
  // Validate the form
  errors.name = form.name ? "" : "Name is required.";

  const ageRegEx = /^(0|[1-9][0-9]?|100)$/;
  errors.age = form.age
    ? ageRegEx.test(form.age)
      ? ""
      : "Must be a valid age"
    : "Age is required.";

  const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  errors.email = form.email
    ? emailRegEx.test(form.email)
      ? ""
      : "Must be a valid Email"
    : "Email is required.";

  const phoneNumberRegex = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/;
  errors.phone = form.phone
    ? phoneNumberRegex.test(form.phone)
      ? ""
      : "Valid Phone Number is required"
    : "Phone Number is required.";

  const dobRegEx = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
  errors.dob = form.dob
    ? dobRegEx.test(form.dob)
      ? ""
      : "Valid Date of Birth format required DD/MM/YYYY"
    : "Date of Birth is required.";

  // Check if there are any errors
  if (Object.values(errors).some((error) => error !== "")) {
    return;
  }

  if (selectedRowId.value === null) {
    // Add new row
    tableData.value.push({
      id: Date.now(),
      ...form,
    });
  } else {
    // Update existing row
    const row = tableData.value.find((row) => row.id === selectedRowId.value);
    if (row) {
      Object.assign(row, form);
    }
    selectedRowId.value = null;
  }
  resetForm();
};

// Delete a row from the table
const deleteRow = (id: number) => {
  tableData.value = tableData.value.filter((row) => row.id !== id);
};

// Populate form with selected row data
const selectRow = (row: {
  id: number;
  name: string;
  age: number;
  email: string;
  phone: number;
  dob: number;
  department: string;
  mealPref: string;
  travelling: string;
}) => {
  Object.assign(form, row);
  selectedRowId.value = row.id;
};

// Reset form
const resetForm = () => {
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

const isUpdateMode = computed(() => selectedRowId.value !== null);
</script>

<template>
  <div class="form">
    <label>
      Name:
      <input v-model="form.name" type="text" />
      <span class="error">{{ errors.name }}</span>
    </label>
    <label>
      Age:
      <input v-model="form.age" type="text" />
      <span class="error">{{ errors.age }}</span>
    </label>
    <label>
      Email:
      <input v-model="form.email" type="email" />
      <span class="error">{{ errors.email }}</span>
    </label>
    <label>
      Phone:
      <input v-model="form.phone" type="text" />
      <span class="error">{{ errors.phone }}</span>
    </label>
    <label>
      Date of Birth:
      <input v-model="form.dob" type="text" />
      <span class="error">{{ errors.dob }}</span>
    </label>

    <label>
      Department:
      <select v-model="form.department">
        <option value="">Select Department</option>
        <option value="HR">HR</option>
        <option value="Design">Design</option>
        <option value="Marketing">Marketing</option>
      </select>
      <span class="error">{{ errors.department }}</span>
    </label>

    <label>
      Meal Preference:
      <select v-model="form.mealPref">
        <option value="">Select Meal Preference</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Non-vegetarian">Non-Vegetarian</option>
        <option value="Halal">Halal</option>
        <option value="Kosher">Kosher</option>
        <option value="Gluten-free">Gluten-Free</option>
      </select>
      <span class="error">{{ errors.mealPref }}</span>
    </label>

    <label>
      Travelling From:
      <select v-model="form.travelling">
        <option value="">Select Travelling From</option>
        <option value="Manchester">Manchester</option>
        <option value="London">London</option>
      </select>
      <span class="error">{{ errors.travelling }}</span>
    </label>

    <button @click="submitForm">{{ isUpdateMode ? "Update" : "Add" }}</button>
    <button @click="resetForm">Reset</button>
  </div>

  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Date of Birth</th>
        <th>Department</th>
        <th>Meal Prefernece</th>
        <th>Travelling From</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in tableData" :key="row.id">
        <td>{{ row.name }}</td>
        <td>{{ row.age }}</td>
        <td>{{ row.email }}</td>
        <td>{{ row.phone }}</td>
        <td>{{ row.dob }}</td>
        <td>{{ row.department }}</td>
        <td>{{ row.mealPref }}</td>
        <td>{{ row.travelling }}</td>
        <button @click="selectRow(row)">Update</button>
        <button @click="deleteRow(row.id)">Delete</button>
      </tr>
    </tbody>
  </table>
</template>

<style>
.form {
  margin-bottom: 16px;
}

.error {
  color: red;
}

label {
  display: block;
  margin-bottom: 8px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}
</style>
