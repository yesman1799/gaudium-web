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

        <!-- NOVÁ KARTA: Suplementy / doplňky stravy -->
        <router-link
          to="/suplementy"
          class="group relative block overflow-hidden rounded-3xl border border-forest-green/10 bg-white/90 shadow-sm hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-forest-green/30"
        >
          <!-- pozadí -->
          <div class="absolute inset-0 -z-10 bg-gradient-to-br from-amber-50 via-orange-50 to-orange-100 opacity-70 group-hover:opacity-90 transition"></div>

          <div class="p-8 md:p-10">
            <div class="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold text-orange-700 ring-1 ring-orange-200">
              Nová podskupina
            </div>

            <h3 class="mt-4 text-3xl font-bold text-forest-green">
              Suplementy / doplňky stravy
            </h3>

            <p class="mt-3 text-forest-green/70 text-lg">
              Prémiové formulace pro <strong>imunitu</strong>, <strong>energii</strong> a <strong>mentální rovnováhu</strong>.
            </p>

            <ul class="mt-6 grid gap-2 text-forest-green/80">
              <li class="flex items-start gap-2">
                <span class="mt-1">•</span>
                <span><strong>Power C-Complex</strong> — chytrý vitamín C (slow-release, Astragalus, myo-inositol, IP6)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-1">•</span>
                <span><strong>Memory & Balance</strong> — paměť, fokus, stres (CDP-cholin, Bacopa, Ashwagandha, Ginkgo, L-theanin, B3)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-1">•</span>
                <span><strong>Alafit Plus</strong> — energie, regenerace, krása (beta-glukan, BCAA, L-karnitin, cystein, arginin, zinek, B17)</span>
              </li>
            </ul>

            <div class="mt-8 inline-flex items-center gap-2 font-semibold text-orange-700">
              Prohlédnout suplementy <span aria-hidden="true">→</span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import ProductCard from '@/components/ProductCard.vue'
import { products } from '@/data/products'
</script>
