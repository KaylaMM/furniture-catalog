import {createRouter, createWebHistory} from 'vue-router'
import HomeView from "../views/HomeView.vue";
import ProductView from '../views/ProductView.vue'

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/productDetails/:id",
    name: "ProductView",
    component: ProductView,
  },
]; 

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router