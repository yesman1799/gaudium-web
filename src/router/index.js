import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'

// HUB + DETAIL (kosmetika)
import Products from '../views/Products.vue'
import ProductDetail from '../views/ProductDetail.vue'

// NOVÉ: seznam suplementů
import SupplementsIndex from '../views/SupplementsIndex.vue'

const routes = [
  { path: '/', component: Home },

  // --- Produkty (kosmetika) + detail ---
  { path: '/produkty', name: 'products', component: Products },
  { path: '/produkty/:slug', name: 'product-detail', component: ProductDetail, props: true },

  // --- Suplementy (nová podskupina, stejné UI, stejné detail view) ---
  { path: '/suplementy', name: 'supplements', component: SupplementsIndex },
  {
    path: '/suplementy/:slug',
    name: 'supplement-detail',
    component: ProductDetail,
    props: (route) => ({ slug: route.params.slug, isSupplement: true }),
  },

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
