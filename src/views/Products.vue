<!-- src/views/Products.vue -->
<template>
  <section class="pt-36 pb-24 bg-warm-beige min-h-screen">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Headline -->
      <div v-on-view class="text-center mb-20 slide-in">
        <div class="inline-block bg-mint-light/20 text-forest-green px-6 py-3 rounded-full text-sm font-semibold mb-8">
          NAŠE PRODUKTY
        </div>
        <h1 class="text-5xl font-bold text-gradient mb-8">Alaptid kolekce</h1>
        <p class="text-xl text-forest-green/70 max-w-3xl mx-auto">
          Každý produkt staví na našem <strong>Alaptid komplexu</strong> a chytré kombinaci přírodních extraktů.
          Jednoduché složení, vysoká snášenlivost a výsledky ověřené praxí — to je péče, která dává smysl.
        </p>
      </div>

      <!-- Grid karet -->
      <div class="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
        <ProductCard
          v-for="(p, i) in products"
          :key="p.slug"
          :product="p"
          :delay="i % 2 ? 'delay-2' : 'delay-1'"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ProductCard from '@/components/ProductCard.vue'
import { products } from '@/data/products'
</script>

<script>
export default {
  directives: { onView: (await import('@/directives/vOnView.js')).default }
}
</script>
