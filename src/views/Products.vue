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
        <!-- existující karty kosmetiky -->
        <ProductCard
          v-for="(p, i) in products"
          :key="p.slug"
          :product="p"
          :delay="i % 2 ? 'delay-2' : 'delay-1'"
        />

        <!-- karta sekce Suplementy – stejný vizuál -->
        <RouterLink
          to="/suplementy"
          v-on-view
          class="bg-white rounded-3xl overflow-hidden shadow-2xl hover-lift slide-in-right"
        >
          <!-- HERO -->
          <div class="relative h-72 md:h-84 lg:h-96 bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
            <svg class="w-48 h-48" viewBox="0 0 200 200" fill="none" aria-hidden="true">
              <rect x="40" y="60" width="120" height="80" rx="20" fill="white" stroke="#2D5A4F" stroke-width="2"/>
              <circle cx="100" cy="100" r="25" fill="#FFB020" opacity="0.25"/>
              <text x="100" y="107" text-anchor="middle" font-size="24" font-weight="700" fill="#1B3B36">S</text>
              <rect x="50" y="120" width="100" height="6" rx="3" fill="#7FB069"/>
              <circle cx="60" cy="80" r="3" fill="#FFB020"/>
              <circle cx="140" cy="80" r="3" fill="#FFB020"/>
            </svg>
          </div>

          <!-- CONTENT -->
          <div class="p-10 flex flex-col gap-6">
            <div>
              <h3 class="text-3xl font-bold text-forest-dark mb-3">Suplementy / doplňky stravy</h3>
              <p class="text-forest-green/80 mb-8 text-lg leading-relaxed">
                Prémiové formulace pro <strong>imunitu</strong>, <strong>energii</strong> a <strong>mentální rovnováhu</strong>.
              </p>
            </div>

            <div class="flex items-center justify-between flex-wrap gap-3">
              <div class="flex items-center gap-2 flex-wrap">
                <span class="bg-mint-light/20 text-forest-green px-3 py-1 rounded-full text-sm font-medium">Power C-Complex</span>
                <span class="bg-mint-light/20 text-forest-green px-3 py-1 rounded-full text-sm font-medium">Memory & Balance</span>
                <span class="bg-mint-light/20 text-forest-green px-3 py-1 rounded-full text-sm font-medium">Alafit Plus</span>
              </div>

              <span class="bg-gradient-to-r from-forest-green to-mint-light text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all">
                Prohlédnout
              </span>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import ProductCard from '@/components/ProductCard.vue'
import { products } from '@/data/products'
</script>
