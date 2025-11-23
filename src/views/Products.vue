<!-- src/views/Products.vue -->
<template>
  <section class="pt-36 pb-24 bg-warm-beige min-h-screen">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Headline -->
      <div v-on-view class="text-center mb-24 slide-in">
        <div class="inline-block bg-mint-light/20 text-forest-green px-6 py-3 rounded-full text-sm font-semibold mb-8">
          NAŠE PRODUKTY
        </div>

        <!-- upravený headline -->
        <h2 class="text-5xl md:text-6xl font-bold text-gradient mb-10 leading-tight">
          Alaptid — srdce našich produktů
        </h2>

        <div class="max-w-4xl mx-auto text-forest-green/80 text-lg md:text-xl leading-relaxed space-y-5">
          <p>
            <strong>Alaptid</strong> je pokrokový bio-aktivní neuropeptid českého původu, který se vyznačuje
            výjimečnými kosmetickými vlastnostmi. Pomocí svého unikátního mechanismu
            působení podporuje přirozený vzhled pokožky a přispívá k pocitu komfortu a svěžesti.
            </p>
          <p>
            Alaptid se liší od běžných kosmetických přísad svou inovativní recepturou a je
            součástí všech našich prémiových produktů – pro komplexní péči o pokožku a ústní
            dutinu.
          </p>
        </div>
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
          <div class="relative h-72 md:h-84 lg:h-96">
            <img :src="suplementyHero" alt="Suplementy Gaudium" class="absolute inset-0 w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black/15"></div>
          </div>

          <!-- CONTENT -->
          <div class="p-10 flex flex-col gap-6">
            <div>
              <h3 class="text-3xl font-bold text-forest-dark mb-3">Suplementy</h3>
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
import { products } from '@/data/items'
const suplementyHero = new URL('@/assets/images/suplementy-hero.jpg', import.meta.url).href
</script>
