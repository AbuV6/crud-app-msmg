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
    id: Number,
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
      borderStyle: 'ridge',
      borderWidth: '7px',
    }"
  >
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text">Age: {{ age }}</p>
      <p class="card-text">Phone: {{ phone }}</p>
      <button @click="update" class="btn-update">Update</button>
      <button @click="remove" class="btn-delete">Delete</button>
      <RouterLink :to="`/guest/${id}`">View</RouterLink>
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
