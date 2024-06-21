<script>

export default {
  name: "CardComponent",
  props: {
    name: String,
    age: Number,
    phone: String,
    update: Function,
    remove: Function,
    view: Function,
  },
};
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text">Age: {{ age }}</p>
      <p class="card-text">Phone: {{ phone }}</p>
      <button @click="update" class="btn-update">Update</button>
      <button @click="remove" class="btn-delete">Delete</button>
      <button @click="view" class="btn-view">View</button>
    </div>
  </div>
</template>

<style scoped>
.card {
  margin: 4px;
  border: 10px solid green;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.card-body {
  padding: 20px;
}
</style>
