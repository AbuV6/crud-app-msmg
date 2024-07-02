import { defineStore } from "pinia";
import { ref } from "vue";

export const useGuestStore = defineStore("guests", () => {
  const guests = ref([
    {
      age
: 
"22",
department
: 
"HR",
dob
: 
"11/11/1991",
email
: 
"bakz@vali.co.uk",
id
: 
1719399045530,
mealPref
: 
"Non-vegetarian",
name
: 
"bakz",
phone
: 
"07762365252",
travelling
: 
"Manchester",
    }
  ]);

  function addGuest(guest) {
    guests.value.push(guest);
  }

  return {guests, addGuest };
});
