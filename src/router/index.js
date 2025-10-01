import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ProductFormamnon from '../views/ProductFormamnon.vue';
import ProductSanusdent from '../views/ProductSanusdent.vue';
import ProductGloria from '../views/ProductGloria.vue';
import Contact from '../views/Contact.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/formamnon', component: ProductFormamnon },
  { path: '/sanusdent', component: ProductSanusdent },
  { path: '/gloria', component: ProductGloria },
  { path: '/contact', component: Contact }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
