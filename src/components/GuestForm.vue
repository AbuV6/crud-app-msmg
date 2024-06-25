<script setup lang="ts">
import Crud from "./Crud.vue";
import { useCounterStore } from "../stores/guestList";
const store = useCounterStore();
import { storeToRefs } from "pinia";

const { count, name, doubleCount, increment } = storeToRefs(store);

console.log(increment, "dsdasdasd");
</script>

<template>
  {{ count }}
  {{ name }}
  {{ doubleCount }}

  <button @click="increment">increment</button>
  <Crud />
</template>

<style></style>
