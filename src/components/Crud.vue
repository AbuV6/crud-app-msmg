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
import { submitForm } from "./helpers/validators";

const viewedRow = ref(null);
const selectedLocation = ref("");

const view = (row) => {
  viewedRow.value = row;
};

const closeDetails = () => {
  viewedRow.value = null;
};

const isUpdateMode = computed(() => selectedRowId.value !== null);

const filteredTableData = computed(() => {
  if (!selectedLocation.value) {
    return tableData.value;
  }
  return tableData.value.filter(
    (row) => row.travelling === selectedLocation.value,
  );
});
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

    <button @click="submitForm">{{ isUpdateMode ? "Update" : "Add" }}</button>
    <button @click="resetForm">Reset</button>
  </div>

  <div class="filter">
    <label>
      Filter by Location:
      <select v-model="selectedLocation">
        <option value="">All Locations</option>
        <option value="Manchester">Manchester</option>
        <option value="London">London</option>
      </select>
    </label>
  </div>

  <div class="container">
    <CardComponent
      v-for="row in filteredTableData"
      :key="row.id"
      :name="row.name"
      :age="row.age"
      :phone="row.phone"
      :travelling="row.travelling"
      :update="() => selectRow(row)"
      :remove="() => deleteRow(row.id)"
      :id="row.id"
    />
  </div>

  <div v-if="viewedRow">
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
  </div>
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
  margin: 20px;
  border: 1px;
  padding: 5px;
}
.container {
  font-size: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
</style>
