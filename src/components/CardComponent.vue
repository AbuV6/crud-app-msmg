<script>
export default {
  name: "CardComponent",
  props: {
    name: String,
    age: Number,
    phone: String,
    travelling: String,
    update: Function,
    remove: Function,
    view: Function,
  },
  computed: {
    borderColor() {
      if (this.travelling === "Manchester") {
        return "yellow";
      } else if (this.travelling === "London") {
        return "red";
      }
    },
  },
};
</script>

<template>
  <div
    class="card"
    :style="{
      borderColor: borderColor,
      borderStyle: 'solid',
      borderWidth: '2px',
    }"
  >
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
  border-radius: 10px;
}
.card-body {
  padding: 20px;
}
</style>
