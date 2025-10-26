<template>
  <section id="products" class="py-24 bg-warm-beige">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Headline -->
      <div v-on-view class="text-center mb-20 slide-in">
        <div class="inline-block bg-mint-light/20 text-forest-green px-6 py-3 rounded-full text-sm font-semibold mb-8">
          NAŠE PRODUKTY
        </div>
        <h2 class="text-5xl font-bold text-gradient mb-8">Naše produkty</h2>
        <p class="text-xl text-forest-green/70 max-w-3xl mx-auto">
          <strong>Alaptid.</strong> Alaptid je bio-aktivní peptid českého původu, který představuje novou generaci účinných látek v kosmetice a péči o tělo.
          Funguje na principu aktivace přirozených regeneračních mechanizmů organismu – podporuje obnovu buněk, zklidňuje podráždění a urychluje hojení postižených míst.
          Na rozdíl od běžných kosmetických přísad nepůsobí pouze povrchově, ale stimuluje vlastní regenerační procesy těla.
          Proto je Alaptid klíčovou složkou všech našich vlajkových produktů – od péče o dásně přes regeneraci pleti až po léčbu kožních problémů.
        </p>
      </div>

      <!-- Cards -->
      <div class="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
        <ProductCard
          v-for="(p,i) in products"
          :key="p.slug"
          :product="p"
          :delay="i % 2 ? 'delay-2' : 'delay-1'"
        />
      </div>

      <!-- CTA -->
      <div class="text-center mt-12">
        <RouterLink
          to="/produkty"
          class="inline-block bg-gradient-to-r from-forest-green to-mint-light text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all"
        >
          Zobrazit všechny produkty
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import ProductCard from '@/components/ProductCard.vue'
import { products } from '@/data/items'
</script>
