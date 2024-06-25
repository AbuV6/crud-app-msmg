import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(2);
  const name = ref("Eduardo");
  const doubleCount = computed(() => count.value * 2);
  const increment = () => {
    count.value++;
  };

  return { count, name, doubleCount, increment };
});
