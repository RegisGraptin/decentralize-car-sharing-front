import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/Home.vue";
import CarCreation from "@/pages/car/CarCreation.vue";
import CarView from "@/pages/car/CarView.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/car",
    component: CarCreation,
  },
  {
    path: "/account/car",
    component: CarView,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;