<script setup lang="ts">
import { ref, computed } from "vue";
import { form, errors, resetForm } from "./helpers/formHandler";
import {
  tableData,
  selectedRowId,
  deleteRow,
  selectRow,
} from "./helpers/tableData";
import CardComponent from "./CardComponent.vue";

const viewedRow = ref(null);

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
    // Add new row
    tableData.value.push({
      id: Date.now(),
      ...form,
    });
  } else {
    // Update existing row
    const row = tableData.value.find((row) => row.id === selectedRowId.value);
    if (row) {
      Object.assign(form, row);
    }
    selectedRowId.value = null;
  }
  resetForm();
};

const view = (row) => {
  viewedRow.value = row;
};

const closeDetails = () => {
  viewedRow.value = null;
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
      Phone:
      <input v-model="form.phone" type="text" />
      <span class="error">{{ errors.phone }}</span>
    </label>
    <label>
      <label>
        Email:
        <input v-model="form.email" type="email" />
        <span class="error">{{ errors.email }}</span>
      </label>
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

    <button @click="submitForm">Add</button>
    <button @click="resetForm">Reset</button>
  </div>

  <div class="container">
    <CardComponent
      v-for="row in tableData"
      :key="row.id"
      :name="row.name"
      :age="row.age"
      :phone="row.phone"
      :update="() => selectRow(row)"
      :remove="() => deleteRow(row.id)"
      :view="() => view(row)"
    />
  </div>

  <!-- <div v-if="viewedRow" class="modal">
    <h2>Details</h2>
    <p><strong>Name:</strong> {{ viewedRow.name }}</p>
    <p><strong>Age:</strong> {{ viewedRow.age }}</p>
    <p><strong>Phone:</strong> {{ viewedRow.phone }}</p>
    <p><strong>Email:</strong> {{ viewedRow.email }}</p>
    <p><strong>Date of Birth:</strong> {{ viewedRow.dob }}</p>
    <p><strong>Department:</strong> {{ viewedRow.department }}</p>
    <p><strong>Meal Preference:</strong> {{ viewedRow.mealPref }}</p>
    <p><strong>Travelling From:</strong> {{ viewedRow.travelling }}</p>
    <button @click="closeDetails">Close</button>
  </div> -->
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

.card {
  margin: 1px;
  border: 1px;
}
.card-body {
  padding: 20px;
}
</style>
