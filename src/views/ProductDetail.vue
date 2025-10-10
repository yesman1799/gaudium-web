<!-- src/views/ProductDetail.vue -->
<template>
  <section class="pt-36 pb-24 bg-warm-beige min-h-screen">
    <div class="max-w-4xl mx-auto px-6" v-if="item">
      <div class="text-center mb-12">
        <div class="inline-block bg-mint-light/20 text-forest-green px-6 py-3 rounded-full text-sm font-semibold mb-8">
          {{ isSupp ? 'DOPLŇKY STRAVY' : 'ALAPTID KOLEKCE' }}
        </div>
        <h1 class="text-5xl font-bold text-gradient mb-4">{{ item.name }}</h1>
        <p class="text-forest-green/70">{{ item.type }}</p>
      </div>

      <!-- HERO blok jako u karty -->
      <div
        :class="[
          'relative h-72 md:h-84 lg:h-96 bg-gradient-to-br flex items-center justify-center rounded-3xl overflow-hidden shadow-2xl mb-10',
          item.theme?.from || 'from-mint-light/20',
          item.theme?.to || 'to-forest-green/20'
        ]"
      >
        <img
          v-if="item.hero"
          :src="item.hero"
          :alt="item.name"
          class="h-full w-full object-contain object-center md:scale-[1.08] lg:scale-[1.12] transition-transform duration-300"
          loading="lazy"
        />
        <template v-else>
          <svg class="w-48 h-48" viewBox="0 0 200 200" fill="none" aria-hidden="true">
            <rect x="40" y="60" width="120" height="80" rx="20" fill="white" stroke="#2D5A4F" stroke-width="2"/>
            <circle cx="100" cy="100" r="25" fill="#7FB069" opacity="0.25"/>
            <text x="100" y="107" text-anchor="middle" font-size="24" font-weight="700" fill="#1B3B36">{{ item.name?.[0] || 'G' }}</text>
            <rect x="50" y="120" width="100" height="6" rx="3" fill="#B5651D"/>
            <circle cx="60" cy="80" r="3" fill="#7FB069"/>
            <circle cx="140" cy="80" r="3" fill="#7FB069"/>
          </svg>
        </template>
      </div>

      <!-- Obsahové sekce -->
      <article class="space-y-8">
        <section
          v-for="(s, i) in item.sections"
          :key="i"
          class="bg-white rounded-3xl overflow-hidden shadow-2xl p-10"
        >
          <h2 class="text-2xl font-semibold text-forest-dark mb-3">{{ s.title }}</h2>
          <div class="prose prose-zinc max-w-none" v-html="s.html"></div>
        </section>
      </article>

      <!-- Kde koupit -->
      <section
        v-if="item.buyLinks?.length"
        class="mt-10 bg-white rounded-3xl overflow-hidden shadow-2xl p-10"
      >
        <h2 class="text-2xl font-semibold text-forest-dark mb-4">Kde koupit</h2>
        <p class="text-forest-green/80 mb-4">
          Zakoupíte u našich ověřených partnerů. Kliknutím přejdete na e-shop (otevře se v&nbsp;nové záložce).
        </p>
        <div class="flex flex-wrap gap-3">
          <a
            v-for="link in item.buyLinks"
            :key="link.url"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-forest-green/10 bg-mint-light/10 hover:bg-mint-light/20 hover:border-forest-green/20 transition-colors"
          >
            <svg class="w-5 h-5 text-forest-green/80 group-hover:text-forest-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 8h12l-1 11H7L6 8Z"/><path d="M9 8V6a3 3 0 1 1 6 0v2"/></svg>
            <span class="text-sm font-medium text-forest-green">{{ link.name }}</span>
            <svg class="w-4 h-4 text-forest-green/60 group-hover:text-forest-green" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 0 1 0-1.06l7.22-7.22H8.5a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7.56l-7.22 7.22a.75.75 0 0 1-1.06 0z" clip-rule="evenodd"/></svg>
          </a>
        </div>
      </section>
    </div>

    <div v-else class="max-w-4xl mx-auto px-6 text-center text-forest-green/60 py-24">
      Produkt nebyl nalezen.
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { products } from '@/data/products'
import { supplements } from '@/data/supplements'

const props = defineProps({
  slug: { type: String, default: '' },
  isSupplement: { type: Boolean, default: false }
})

const route = useRoute()
const slug = computed(() => props.slug || route.params.slug)
const isSupp = computed(() => props.isSupplement || route.path.startsWith('/suplementy'))
const source = computed(() => (isSupp.value ? supplements : products))
const item = computed(() => source.value.find(p => p.slug === slug.value))
</script>
