<!-- src/views/SupplementsIndex.vue -->
<template>
  <section class="pt-36 pb-24 bg-warm-beige min-h-screen">
    <div class="max-w-7xl mx-auto px-6">
      <div v-on-view class="text-center mb-20 slide-in">
        <div class="inline-block bg-mint-light/20 text-forest-green px-6 py-3 rounded-full text-sm font-semibold mb-8">
          NAŠE PRODUKTY
        </div>
        <h1 class="text-5xl font-bold text-gradient mb-8">Suplementy / doplňky stravy</h1>
        <p class="text-xl text-forest-green/70 max-w-3xl mx-auto">
          Stejná filozofie jako u kosmetiky. Čisté složení a vysoká účinnost.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
        <ProductCard
          v-for="(p, i) in supplements"
          :key="p.slug"
          :product="p"
          :delay="i % 2 ? 'delay-2' : 'delay-1'"
          :basePath="'/suplementy'"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ProductCard from '@/components/ProductCard.vue'
import { supplements } from '@/data/items'
</script>
