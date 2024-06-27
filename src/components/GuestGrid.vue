<script setup lang="ts">
import {ref, computed} from "vue"
import CardComponent from "./CardComponent.vue";
import { useGuestStore } from "../stores/guestList";
const store = useGuestStore();
import { storeToRefs } from "pinia";
const { guests } = storeToRefs(store);
import { selectRow } from "./helpers/tableData";
import { deleteRow } from "./helpers/tableData"
 
const selectedLocation = ref("");

const filteredTableData = computed(() => {
  if (!selectedLocation.value) {
    return guests.value;
  }
  return guests.value.filter(
    (row) => row.travelling === selectedLocation.value,
  );
});
</script>

<template>


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
      :update=" () => selectRow(row)"
      :remove=" () => deleteRow(row.id)"
      :id="row.id"
      :guests="row"
    />
  </div>
</template>

<style>
.container {
  font-size: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
</style>