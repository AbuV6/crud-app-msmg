<script setup lang="ts">
import {computed } from "vue";
import { form } from "./helpers/formHandler";
import {errors} from "./helpers/formHandler"
import {resetForm} from "./helpers/formHandler"
import {
  selectedRowId,
} from "./helpers/tableData";
import { submitForm } from "./helpers/validators";

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

    <button @click="submitForm">{{ isUpdateMode ? "Update" : "Add" }}</button>
    <button @click="resetForm">Reset</button>
  </div>
</template>

<style>
.form {
  margin-bottom: 16px;
}

.error {
  color:red;
}

label {
  display: block;
  margin-bottom: 8px;
}
</style>
