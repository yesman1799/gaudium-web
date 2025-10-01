import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'

// MOVE:
import Products from '../views/Products.vue'
import ProductDetail from '../views/ProductDetail.vue'

const routes = [
  { path: '/', component: Home },

  // HUB + DETAIL
  { path: '/produkty', name: 'products', component: Products },
  { path: '/produkty/:slug', name: 'product-detail', component: ProductDetail, props: true },

  // Redirecty ze starých cest / SEO
  { path: '/formamnon',  redirect: { name: 'product-detail', params: { slug: 'formamnon' } } },
  { path: '/sanusdent',  redirect: { name: 'product-detail', params: { slug: 'sanusdent' } } },

  { path: '/contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
