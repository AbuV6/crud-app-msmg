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
      <RouterLink class="button-view" :to="`/guest/${id}`">View</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 10px;

  &-body {
    padding: 20px;
  }
}

.button-view {
  color: black;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 9px 19px;
  font-size: 16px;
  font-weight: 500;
  font-family: inherit;
  background-color: white;
  cursor: pointer;
  transition: border-color 0.25s;
  margin: 3px;
}

</style>
