import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import GuestForm from "./components/GuestForm.vue";
import GuestView from "./components/GuestDetails.vue";
import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: GuestForm },
  { path: "/guest/:id", component: GuestView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount("#app");
