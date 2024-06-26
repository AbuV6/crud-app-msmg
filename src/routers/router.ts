import Home from "../views/Home.vue";
import GuestView from "../components/GuestDetails.vue";
import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
    { path: "/", component: Home},
    { path: "/guest/:id", component: GuestView },
  ];
  
  export const router = createRouter({
    history: createMemoryHistory(),
    routes,
  });