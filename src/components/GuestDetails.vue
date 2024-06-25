<script>
export default {
  name: "GuestView",
  props: {
    id: Number,
  },
};
</script>

<template>
  <p>I am guest</p>
  User {{ $route.params.id }}
  <RouterLink to="/">Go back</RouterLink>
</template>

<style scoped></style>
