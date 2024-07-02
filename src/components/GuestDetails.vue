<script setup lang="ts">
import { useGuestStore } from "../stores/guestList";
import { useRoute } from 'vue-router'
const store = useGuestStore();
import { storeToRefs } from "pinia";
const { guests } = storeToRefs(store);

const route = useRoute()
const guest = guests.value.find((guest) => {
  return guest.id == route.params.id;
});

</script>

<template>
  <div class="container">
  <div>Name: {{ guest.name }}</div>
  <div>Age: {{ guest.age }}</div>
  <div>Phone: {{ guest.phone }} </div> 
  <div>Email: {{ guest.email }}</div> 
  <div>Date Of Birth: {{ guest.dob }} </div> 
  <div>Department: {{ guest.department }}</div> 
  <div>Meal Preference: {{ guest.mealPref }}</div> 
  <div>Travelling From: {{ guest.travelling }}</div>
</div>
  <RouterLink to="/">Go back</RouterLink>
</template>

<style scoped>

.container {
  
  border: 10px;
  border-style:ridge;
  display: block;
}
</style>

