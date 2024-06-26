import { defineStore } from "pinia";
import { ref } from "vue";

export const useGuestStore = defineStore("guests", () => {
  const guests = ref([]);

  function addGuest(guest) {
    guests.value.push(guest);
  }

  return { guests, addGuest };
});
