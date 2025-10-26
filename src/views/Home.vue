<!-- src/views/Home.vue -->
<template>
  <!-- HERO (Carousel) -->
  <section class="relative w-screen h-[88svh] md:h-[85vh] overflow-hidden">
    <!-- Slides -->
    <div class="absolute inset-0">
      <div
        v-for="(img, i) in carouselImages"
        :key="i"
        class="absolute inset-0 transition-opacity duration-700 ease-out"
        :class="currentSlide === i ? 'opacity-100' : 'opacity-0'"
      >
        <img :src="img" alt="" class="w-screen h-full object-cover" />
        <div class="absolute inset-0 bg-black/25"></div>
      </div>
    </div>

    <!-- Content overlay  -->
    <div class="relative h-full flex items-start lg:items-center">
      <div class="w-full">
        <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            v-on-view
            class="slide-in relative z-10
                  mt-24 sm:mt-28
                  lg:mt-16 xl:mt-20
                  backdrop-blur-md bg-white/50 lg:bg-white/35
                  rounded-2xl lg:rounded-3xl
                  p-5 sm:p-7 lg:p-9
                  shadow-lg border border-white/30
                  max-w-[19rem] sm:max-w-md md:max-w-lg lg:max-w-xl"
          >
            <!-- pill -->
            <div class="inline-block bg-mint-light/30 text-forest-green px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Aktivní regenerace s&nbsp;Alaptidem
            </div>

            <!-- H1 -->
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold mb-5 sm:mb-7 lg:mb-6 leading-tight text-forest-dark">
              <span class="text-gradient">Příroda</span><br />
              <span class="text-forest-green">&amp; Věda</span><br />
              <span class="text-mint-light">v harmonii</span>
            </h1>

            <!-- Lead -->
            <p class="text-base sm:text-lg md:text-lg lg:text-[18px] text-forest-dark/80 mb-6 sm:mb-7 lg:mb-8 leading-relaxed">
              Inovativní produkty na bázi Alaptidu – pro rychlé hojení, regeneraci a přirozenou rovnováhu těla i mysli.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <RouterLink
                to="/produkty"
                class="bg-gradient-to-r from-forest-green to-mint-light text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:shadow-xl transform hover:scale-105 transition-all"
              >
                Prozkoumat produkty
              </RouterLink>
              <!-- odkaz na vědecké studie byl na přání klienta odstraněn -->
            </div>
          </div>

          <div class="hidden lg:block"></div>
        </div>
      </div>
    </div>

    <!-- Dots -->
    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
      <button
        v-for="(img, i) in carouselImages"
        :key="'dot-'+i"
        class="h-2.5 w-2.5 rounded-full transition-all"
        :class="currentSlide === i ? 'bg-white w-6' : 'bg-white/60 hover:bg-white/80'"
        @click="goTo(i)"
        aria-label="Go to slide"
      />
    </div>

    <!-- Arrows -->
    <button
      class="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/40 text-white rounded-full w-10 h-10 grid place-items-center"
      @click="prev"
      aria-label="Previous slide"
    >
      ‹
    </button>
    <button
      class="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/40 text-white rounded-full w-10 h-10 grid place-items-center"
      @click="next"
      aria-label="Next slide"
    >
      ›
    </button>
  </section>

  <!-- PRODUCTS (ponecháno) -->
  <section id="products" class="py-24 bg-warm-beige">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Headline -->
      <div v-on-view class="text-center mb-20 slide-in">
        <div class="inline-block bg-mint-light/20 text-forest-green px-6 py-3 rounded-full text-sm font-semibold mb-8">
          NAŠE PRODUKTY
        </div>
        <h2 class="text-5xl font-bold text-gradient mb-8">Alaptid kolekce</h2>
        <p class="text-xl text-forest-green/70 max-w-3xl mx-auto">
          Každý produkt staví na našem <strong>Alaptid komplexu</strong> a chytré kombinaci přírodních extraktů.
          Jednoduché složení, vysoká snášenlivost a výsledky ověřené praxí — to je péče, která dává smysl.
        </p>
      </div>

      <!-- Cards -->
      <div class="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
        <!-- standardní produkty -->
        <ProductCard
          v-for="(p,i) in products"
          :key="p.slug"
          :product="p"
          :delay="i % 2 ? 'delay-2' : 'delay-1'"
        />

        <!-- Suplementy – karta řízená daty z items.js (supplements-card) -->
        <RouterLink
          v-if="supplementsCard"
          :to="supplementsCard.cta?.link || '/suplementy'"
          v-on-view
          class="bg-white rounded-3xl overflow-hidden shadow-2xl hover-lift slide-in-right"
        >
          <!-- HERO -->
          <div class="relative h-72 md:h-84 lg:h-96">
            <img :src="supplementsCard.hero" alt="Suplementy Gaudium" class="absolute inset-0 w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black/15"></div>
          </div>

          <!-- CONTENT -->
          <div class="p-10 flex flex-col gap-6">
            <div>
              <h3 class="text-3xl font-bold text-forest-dark mb-3">{{ supplementsCard.name }}</h3>
              <p class="text-forest-green/80 mb-8 text-lg leading-relaxed" v-html="supplementsCard.sections?.[0]?.html" />
            </div>

            <div class="flex items-center justify-between flex-wrap gap-3">
              <div class="flex items-center gap-2 flex-wrap">
                <span
                  v-for="t in (supplementsCard.tags || [])"
                  :key="t"
                  class="bg-mint-light/20 text-forest-green px-3 py-1 rounded-full text-sm font-medium"
                >{{ t }}</span>
              </div>

              <span class="bg-gradient-to-r from-forest-green to-mint-light text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all">
                {{ supplementsCard.cta?.label || 'Prohlédnout suplementy' }}
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
import { products, getItemBySlug } from '@/data/items'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const carouselImages = [
  new URL('../assets/images/carousel1.jpg', import.meta.url).href,
  new URL('../assets/images/carousel2.jpg', import.meta.url).href,
  new URL('../assets/images/carousel3.jpg', import.meta.url).href,
  new URL('../assets/images/carousel4.jpg', import.meta.url).href,
]

// hero obrázek pro fallback (nepoužije se, když je v datech)
const suplementyHero = new URL('@/assets/images/suplementy-hero.jpg', import.meta.url).href

// karta suplementů z dat
const supplementsCard = getItemBySlug('supplements-card')

const currentSlide = ref(0)
let timerId

const next = () => (currentSlide.value = (currentSlide.value + 1) % carouselImages.length)
const prev = () => (currentSlide.value = (currentSlide.value - 1 + carouselImages.length) % carouselImages.length)
const goTo = (i) => (currentSlide.value = i)

onMounted(() => { timerId = setInterval(next, 5000) })
onBeforeUnmount(() => { if (timerId) clearInterval(timerId) })
</script>
