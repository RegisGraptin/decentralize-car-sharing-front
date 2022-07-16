import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import CarCreation from "@/components/CarCreation.vue";
import CarView from "@/components/CarView.vue";

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