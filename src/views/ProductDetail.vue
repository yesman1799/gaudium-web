<template>
  <section class="pt-36 pb-20 bg-cream-white">
    <div class="max-w-6xl mx-auto px-6">
      <RouterLink to="/produkty" class="text-forest-green hover:text-mint-light">&larr; Zpět na produkty</RouterLink>

      <div class="grid lg:grid-cols-2 gap-12 mt-8">
        <div class="glass-effect rounded-3xl p-6 flex items-center justify-center">
          <img v-if="product?.hero" :src="product.hero" :alt="product.name" class="max-h-[420px] object-contain" />
          <div v-else class="w-full aspect-[4/3] rounded-2xl border border-forest-green/20"></div>
        </div>

        <div>
          <h1 class="text-4xl font-bold text-forest-dark mb-4">{{ product?.name }}</h1>
          <p class="text-lg text-forest-green/80 mb-6">{{ product?.short }}</p>

          <div class="flex gap-2 mb-8 flex-wrap">
            <span v-for="t in (product?.tags || [])" :key="t" class="bg-mint-light/20 text-forest-green px-3 py-1 rounded-full text-sm font-medium">{{ t }}</span>
          </div>

          <div class="space-y-6">
            <div v-for="(sec,i) in (product?.sections || [])" :key="i" class="p-6 bg-white rounded-2xl shadow">
              <h3 class="text-xl font-semibold mb-2">{{ sec.title }}</h3>
              <div class="text-forest-green/80" v-html="sec.html"></div>
            </div>
          </div>

          <div class="mt-8 flex flex-wrap gap-3">
            <a v-for="l in (product?.buyLinks || [])" :key="l.url" :href="l.url" target="_blank"
               class="bg-gradient-to-r from-forest-green to-mint-light text-white px-5 py-3 rounded-xl font-semibold hover:shadow-lg">
              {{ l.label }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { getProductBySlug } from '@/data/products'
const route = useRoute()
const product = getProductBySlug(route.params.slug)
</script>
