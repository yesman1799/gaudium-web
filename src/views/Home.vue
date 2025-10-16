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
                  /* move down under navbar on mobile/tablet */
                  mt-24 sm:mt-28
                  /* also push down on desktop */
                  lg:mt-16 xl:mt-20
                  /* readable panel */
                  backdrop-blur-md bg-white/50 lg:bg-white/35
                  rounded-2xl lg:rounded-3xl
                  p-5 sm:p-7 lg:p-9
                  shadow-lg border border-white/30
                  /* slimmer on phone, comfy on desktop */
                  max-w-[19rem] sm:max-w-md md:max-w-lg lg:max-w-xl"
          >
            <div class="inline-block bg-mint-light/30 text-forest-green px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              🌿 Revoluční Alaptid komplex
            </div>

            <!-- slightly smaller on desktop so everything fits -->
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold mb-5 sm:mb-7 lg:mb-6 leading-tight text-forest-dark">
              <span class="text-gradient">Příroda</span><br />
              <span class="text-forest-green">&amp; Věda</span><br />
              <span class="text-mint-light">v harmonii</span>
            </h1>

            <p class="text-base sm:text-lg md:text-lg lg:text-[18px] text-forest-dark/80 mb-6 sm:mb-7 lg:mb-8 leading-relaxed">
              Objevte budoucnost přírodní kosmetiky. Naše produkty kombinují tisíciletou moudrost přírody s nejmodernějšími
              vědeckými poznatky.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <RouterLink
                to="/produkty"
                class="bg-gradient-to-r from-forest-green to-mint-light text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:shadow-xl transform hover:scale-105 transition-all"
              >
                Prozkoumat produkty
              </RouterLink>
              <a
                href="#science"
                class="border-2 border-forest-green text-forest-green px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:bg-forest-green hover:text-white transition-all"
              >
                Vědecké studie
              </a>
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


  <!-- ABOUT -->
  <section id="about" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div v-on-view class="text-center mb-20 slide-in">
        <div class="inline-block bg-copper-accent/10 text-copper-accent px-6 py-3 rounded-full text-sm font-semibold mb-8">NAŠE MISE</div>
        <h2 class="text-5xl font-bold text-gradient mb-8">Vědecká excelence</h2>
        <p class="text-xl text-forest-green/70 max-w-4xl mx-auto leading-relaxed">
          Od roku 2022 revolucionizujeme svět přírodní kosmetiky. Náš tým vyvinul průlomový Alaptid komplex — novou generaci účinných přírodních ingrediencí.
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-12">
        <div v-on-view class="glass-effect rounded-3xl p-10 hover-lift slide-in delay-1 text-center">
          <div class="w-20 h-20 bg-gradient-to-br from-mint-light to-forest-green rounded-2xl flex items-center justify-center mb-8 mx-auto">
            <svg class="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M9 12l2 2 4-4M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Z"/></svg>
          </div>
          <h3 class="text-2xl font-bold text-forest-dark mb-4">Inovace</h3>
          <p class="text-forest-green/70">Bioaktivní látky a jejich synergie.</p>
        </div>

        <div v-on-view class="glass-effect rounded-3xl p-10 hover-lift slide-in delay-2 text-center">
          <div class="w-20 h-20 bg-gradient-to-br from-copper-accent to-forest-green rounded-2xl flex items-center justify-center mb-8 mx-auto">
            <svg class="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M2.166 5A11.9 11.9 0 0 1 12 2c3.355 0 6.394 1.374 8.5 3.584.11.652.166 1.321.166 2 0 5.225-3.34 9.67-8 11.317C7.34 16.67 4 12.225 4 7c0-.679.057-1.348.166-2Zm9.54 3.707a1 1 0 1 1 1.415 1.415l-3.293 3.292L8.54 11.415a1 1 0 1 1 1.414-1.415l.707.708 1.046-1.001Z"/></svg>
          </div>
          <h3 class="text-2xl font-bold text-forest-dark mb-4">Bezpečnost</h3>
          <p class="text-forest-green/70">Testováno dle mezinárodních standardů kvality.</p>
        </div>

        <div v-on-view class="glass-effect rounded-3xl p-10 hover-lift slide-in delay-3 text-center">
          <div class="w-20 h-20 bg-gradient-to-br from-sage-muted to-mint-light rounded-2xl flex items-center justify-center mb-8 mx-auto">
            <svg class="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"/></svg>
          </div>
          <h3 class="text-2xl font-bold text-forest-dark mb-4">Udržitelnost</h3>
          <p class="text-forest-green/70">Ekologické zdroje a minimální dopad.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PRODUCTS -->
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
        <ProductCard
          v-for="(p,i) in products"
          :key="p.slug"
          :product="p"
          :delay="i % 2 ? 'delay-2' : 'delay-1'"
        />

        <!-- NOVÁ karta: Suplementy / doplňky stravy -->
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

  <!-- EFEKTY / BENEFITY -->
  <section class="pt-6 pb-24 bg-warm-beige">
    <div class="max-w-7xl mx-auto px-6">
      <div class="mt-6 grid sm:grid-cols-3 gap-4 max-w-6xl mx-auto">
        <div v-on-view class="glass-effect rounded-2xl px-5 py-5 text-center slide-in delay-1">
          <p class="font-semibold text-forest-dark">Šetrné složení</p>
          <p class="text-sm text-forest-green/70">Bez zbytečných přísad, zaměřeno na účinnost</p>
        </div>
        <div v-on-view class="glass-effect rounded-2xl px-5 py-5 text-center slide-in delay-2">
          <p class="font-semibold text-forest-dark">Alaptid inside</p>
          <p class="text-sm text-forest-green/70">Neuropeptid podporující obnovu a komfort</p>
        </div>
        <div v-on-view class="glass-effect rounded-2xl px-5 py-5 text-center slide-in delay-3">
          <p class="font-semibold text-forest-dark">Věda & příroda</p>
          <p class="text-sm text-forest-green/70">Ověřené suroviny, moderní přístup</p>
        </div>
      </div>
    </div>
  </section>

  <!-- SCIENCE -->
  <section id="science" class="py-24 bg-forest-dark text-white">
    <div class="max-w-7xl mx-auto px-6">
      <div v-on-view class="text-center mb-20 slide-in">
        <div class="inline-block bg-mint-light/20 text-mint-light px-6 py-3 rounded-full text-sm font-semibold mb-8">VĚDECKÉ POZADÍ</div>
        <h2 class="text-5xl font-bold mb-8"><span class="text-white">Alaptid</span> <span class="text-mint-light">komplex</span></h2>
        <p class="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
          Revoluční bioaktivní komplex vyvinutý našimi vědci kombinuje přírodní extrakty s pokročilou enkapsulací pro optimální absorpci a účinnost.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div v-on-view class="slide-in space-y-8">
          <div class="flex items-start gap-6">
            <div class="w-16 h-16 bg-mint-light/20 rounded-2xl flex items-center justify-center shrink-0"><span class="text-mint-light font-bold text-xl">01</span></div>
            <div>
              <h3 class="text-2xl font-bold mb-3">Bioaktivní extrakty</h3>
              <p class="text-white/70 leading-relaxed">Koncentrované výtažky z vybraných léčivých rostlin s prokázanými terapeutickými vlastnostmi.</p>
            </div>
          </div>
          <div class="flex items-start gap-6">
            <div class="w-16 h-16 bg-copper-accent/20 rounded-2xl flex items-center justify-center shrink-0"><span class="text-copper-accent font-bold text-xl">02</span></div>
            <div>
              <h3 class="text-2xl font-bold mb-3">Nanotechnologie</h3>
              <p class="text-white/70 leading-relaxed">Pokročilá enkapsulace zajišťuje optimální penetraci aktivních látek do pokožky.</p>
            </div>
          </div>
          <div class="flex items-start gap-6">
            <div class="w-16 h-16 bg-sage-muted/20 rounded-2xl flex items-center justify-center shrink-0"><span class="text-sage-muted font-bold text-xl">03</span></div>
            <div>
              <h3 class="text-2xl font-bold mb-3">Synergické účinky</h3>
              <p class="text-white/70 leading-relaxed">Pečlivě vyvážená kombinace ingrediencí pro maximalizaci terapeutického potenciálu.</p>
            </div>
          </div>
        </div>

        <div v-on-view class="slide-in-right delay-2">
          <svg class="w-full h-96" viewBox="0 0 400 300" fill="none" aria-hidden="true">
            <path d="M50 50 Q100 75, 150 50 T250 50 T350 50" stroke="#7FB069" stroke-width="4" fill="none" />
            <path d="M50 100 Q100 125, 150 100 T250 100 T350 100" stroke="#B5651D" stroke-width="4" fill="none" />
            <path d="M50 150 Q100 175, 150 150 T250 150 T350 150" stroke="#7FB069" stroke-width="4" fill="none" />
            <path d="M50 200 Q100 225, 150 200 T250 200 T350 200" stroke="#B5651D" stroke-width="4" fill="none" />
            <line x1="75" y1="62" x2="75" y2="88" stroke="#A8B5A0" stroke-width="2" />
            <line x1="125" y1="62" x2="125" y2="88" stroke="#A8B5A0" stroke-width="2" />
            <line x1="175" y1="62" x2="175" y2="88" stroke="#A8B5A0" stroke-width="2" />
            <line x1="225" y1="62" x2="225" y2="88" stroke="#A8B5A0" stroke-width="2" />
            <line x1="275" y1="62" x2="275" y2="88" stroke="#A8B5A0" stroke-width="2" />
            <circle cx="75" cy="62" r="6" fill="#7FB069" />
            <circle cx="125" cy="62" r="6" fill="#7FB069" />
            <circle cx="175" cy="62" r="6" fill="#7FB069" />
            <circle cx="225" cy="62" r="6" fill="#7FB069" />
            <circle cx="275" cy="62" r="6" fill="#7FB069" />
            <circle cx="75" cy="88" r="6" fill="#B5651D" />
            <circle cx="125" cy="88" r="6" fill="#B5651D" />
            <circle cx="175" cy="88" r="6" fill="#B5651D" />
            <circle cx="225" cy="88" r="6" fill="#B5651D" />
            <circle cx="275" cy="88" r="6" fill="#B5651D" />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ProductCard from '@/components/ProductCard.vue'
import { products } from '@/data/products'
import { ref, onMounted, onBeforeUnmount } from 'vue'

// ✅ Use Vite-resolved URLs so build rewrites the asset paths correctly
// This file is at src/views/Home.vue, so use a RELATIVE path to /src/assets
const carouselImages = [
  new URL('../assets/images/carousel1.jpg', import.meta.url).href,
  new URL('../assets/images/carousel2.jpg', import.meta.url).href,
  new URL('../assets/images/carousel3.jpg', import.meta.url).href,
  new URL('../assets/images/carousel4.jpg', import.meta.url).href,
]

// If you prefer your @ alias and it's configured in vite.config.js, this also works:
// const carouselImages = [
//   new URL('@/assets/images/carousel1.jpg', import.meta.url).href,
//   new URL('@/assets/images/carousel2.jpg', import.meta.url).href,
//   new URL('@/assets/images/carousel3.jpg', import.meta.url).href,
//   new URL('@/assets/images/carousel4.jpg', import.meta.url).href,
// ]

// Supplements hero (already fine, but keeping here for clarity)
const suplementyHero = new URL('@/assets/images/suplementy-hero.jpg', import.meta.url).href

const currentSlide = ref(0)
let timerId

const next = () => (currentSlide.value = (currentSlide.value + 1) % carouselImages.length)
const prev = () => (currentSlide.value = (currentSlide.value - 1 + carouselImages.length) % carouselImages.length)
const goTo = (i) => (currentSlide.value = i)

onMounted(() => { timerId = setInterval(next, 5000) })
onBeforeUnmount(() => { if (timerId) clearInterval(timerId) })
</script>

