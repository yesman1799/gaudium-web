<template>
  <section v-if="product" class="max-w-5xl mx-auto px-6 py-16">
    <!-- HERO -->
    <div
      :class="[
        'relative h-72 md:h-84 lg:h-96 rounded-3xl overflow-hidden mb-12 flex items-center justify-center bg-gradient-to-br',
        product.theme?.from || 'from-mint-light/20',
        product.theme?.to || 'to-forest-green/20'
      ]"
    >
      <img
        v-if="product.hero"
        :src="product.hero"
        :alt="product.name"
        class="h-full w-full object-contain object-center md:scale-[1.05]"
        loading="lazy"
      />
    </div>

    <!-- PRODUCT INFO -->
    <h1 class="text-4xl md:text-5xl font-bold text-forest-dark mb-6">
      {{ product.name }}
    </h1>

    <p class="text-lg text-forest-green/80 mb-10 leading-relaxed">
      {{ product.short }}
    </p>

    <div v-for="(section, i) in product.sections" :key="i" class="mb-10">
      <h2 class="text-2xl font-semibold text-forest-dark mb-3">{{ section.title }}</h2>
      <div class="text-forest-green/90 leading-relaxed prose prose-forest max-w-none" v-html="section.html" />
    </div>

    <!-- PRODUCT TAGS -->
    <div class="flex flex-wrap gap-2 mb-12">
      <span
        v-for="t in (product.tags || [])"
        :key="t"
        class="bg-mint-light/20 text-forest-green px-3 py-1 rounded-full text-sm font-medium"
      >
        {{ t }}
      </span>
      <span
        v-if="product.size"
        class="px-3 py-1 rounded-full text-sm font-medium"
        :class="product.theme?.accent || 'bg-copper-accent/20 text-copper-accent'"
      >
        {{ product.size }}
      </span>
    </div>

    <!-- 🛒 Kde koupit -->
    <section
      v-if="product?.buyLinks?.length"
      class="mt-12 rounded-2xl border border-forest-green/10 bg-mint-light/10 p-6 md:p-8"
    >
      <h2 class="text-2xl md:text-3xl font-bold text-forest-dark mb-3">Kde koupit</h2>
      <p class="text-forest-green/80 mb-6">
        Zakoupíte u našich ověřených partnerů. Kliknutím přejdete na e-shop (otevře se v nové záložce).
      </p>

      <div class="flex flex-wrap gap-3">
        <a
          v-for="link in product.buyLinks"
          :key="link.url"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-forest-green/10
                 bg-white hover:bg-mint-light/20 hover:border-forest-green/20 transition-colors shadow-sm"
        >
          <span class="text-sm font-medium text-forest-green">{{ link.name }}</span>
          <svg
            class="w-4 h-4 text-forest-green/60"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.22 14.78a.75.75 0 0 1 0-1.06l7.22-7.22H8.5a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7.56l-7.22 7.22a.75.75 0 0 1-1.06 0z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
    </section>
  </section>

  <!-- If product not found -->
  <section v-else class="text-center py-20">
    <h1 class="text-3xl font-bold text-forest-dark mb-4">Produkt nenalezen</h1>
    <RouterLink
      to="/produkty"
      class="text-forest-green underline hover:text-copper-accent transition-colors"
    >
      Zpět na přehled produktů
    </RouterLink>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { getProductBySlug } from '@/data/products.js'

const route = useRoute()
const product = getProductBySlug(route.params.slug)
</script>
