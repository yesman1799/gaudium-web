<!-- src/views/Home.vue -->
<template>
  <!-- HERO -->
  <section class="min-h-screen gradient-bg flex items-center pt-32 pb-20">
    <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      <div v-on-view class="slide-in">
        <div class="inline-block bg-mint-light/20 text-forest-green px-4 py-2 rounded-full text-sm font-medium mb-6">
          🌿 Revoluční Alaptid komplex
        </div>
        <h1 class="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          <span class="text-gradient">Příroda</span><br />
          <span class="text-forest-green">&amp; Věda</span><br />
          <span class="text-mint-light">v harmonii</span>
        </h1>
        <p class="text-xl text-forest-green/80 mb-10 leading-relaxed max-w-lg">
          Objevte budoucnost přírodní kosmetiky. Naše produkty kombinují tisíciletou moudrost přírody s nejmodernějšími vědeckými poznatky.
        </p>
        <div class="flex flex-col sm:flex-row gap-6">
          <RouterLink
            to="/produkty"
            class="bg-gradient-to-r from-forest-green to-mint-light text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all"
          >
            Prozkoumat produkty
          </RouterLink>
          <a
            href="#science"
            class="border-2 border-forest-green text-forest-green px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-forest-green hover:text-white transition-all"
          >
            Vědecké studie
          </a>
        </div>
      </div>

      <div v-on-view class="slide-in-right delay-2">
        <div class="relative floating">
          <!-- dekorativní SVG -->
          <svg class="w-full h-[600px]" viewBox="0 0 500 500" fill="none" aria-hidden="true">
            <ellipse cx="250" cy="250" rx="200" ry="280" fill="url(#leafGradient)" opacity="0.1"/>
            <path d="M250 50 C300 100, 350 150, 380 220 C350 290, 300 350, 250 400 C200 350, 150 290, 120 220 C150 150, 200 100, 250 50 Z" fill="url(#leafGradient)"/>
            <path d="M250 80 C280 110, 310 140, 330 180 C310 220, 280 250, 250 280 C220 250, 190 220, 170 180 C190 140, 220 110, 250 80 Z" fill="#2D5A4F"/>
            <line x1="250" y1="80"  x2="250" y2="280" stroke="#1B3B36" stroke-width="3"/>
            <path d="M250 120 Q280 140, 300 170" stroke="#1B3B36" stroke-width="2" fill="none"/>
            <path d="M250 120 Q220 140, 200 170" stroke="#1B3B36" stroke-width="2" fill="none"/>
            <path d="M250 160 Q275 175, 290 200" stroke="#1B3B36" stroke-width="2" fill="none"/>
            <path d="M250 160 Q225 175, 210 200" stroke="#1B3B36" stroke-width="2" fill="none"/>

            <g opacity="0.7">
              <circle cx="400" cy="150" r="30" fill="none" stroke="#B5651D" stroke-width="3"/>
              <circle cx="400" cy="150" r="15" fill="#B5651D" opacity="0.3"/>
              <circle cx="420" cy="130" r="8"  fill="#B5651D"/>
              <circle cx="380" cy="170" r="8"  fill="#B5651D"/>
              <line x1="400" y1="150" x2="420" y2="130" stroke="#B5651D" stroke-width="2"/>
              <line x1="400" y1="150" x2="380" y2="170" stroke="#B5651D" stroke-width="2"/>
            </g>

            <defs>
              <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"  stop-color="#7FB069"/>
                <stop offset="100%" stop-color="#2D5A4F"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
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

        <!-- NOVÁ karta: Suplementy / doplňky stravy (stejný vizuál jako ProductCard) -->
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
</script>
