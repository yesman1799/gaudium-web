<template>
  <article
    v-on-view
    class="bg-white rounded-3xl overflow-hidden shadow-2xl hover-lift slide-in-right"
    :class="delay"
  >
    <!-- Hero area (fallback SVG, když není fotka) -->
    <div class="h-64 flex items-center justify-center"
         :class="['bg-gradient-to-br', product.theme?.from || 'from-mint-light/20', product.theme?.to || 'to-forest-green/20']">
      <img v-if="product.hero" :src="product.hero" :alt="product.name" class="max-h-56 object-contain" />
      <Packshot v-else :type="product.type" :letter="product.name?.[0] || 'G'"/>
    </div>

    <div class="p-10">
      <h3 class="text-3xl font-bold text-forest-dark mb-3">{{ product.name }}</h3>
      <p v-if="product.tagline" class="text-forest-green/90 mb-1 font-medium italic">
        {{ product.tagline }}
      </p>
      <p class="text-forest-green/80 mb-8 text-lg leading-relaxed">
        {{ product.short }}
      </p>

      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2 flex-wrap">
          <span v-for="t in (product.tags||[])" :key="t"
                class="bg-mint-light/20 text-forest-green px-3 py-1 rounded-full text-sm font-medium">{{ t }}</span>
          <span v-if="product.size"
                class="px-3 py-1 rounded-full text-sm font-medium"
                :class="product.theme?.accent || 'bg-copper-accent/20 text-copper-accent'">{{ product.size }}</span>
        </div>

        <RouterLink :to="'/produkty/'+product.slug"
                    class="bg-gradient-to-r from-forest-green to-mint-light text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all">
          Detail
        </RouterLink>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  product: { type: Object, required: true },
  delay: { type: String, default: '' }
})

/** Minimalistický SVG packshot (bez fotky) */
const Packshot = {
  props: { type: String, letter: String },
  computed: {
    palette() {
      const map = {
        gel:        { ring: '#7FB069', rail: '#B5651D' },
        pasta:      { ring: '#B5651D', rail: '#7FB069' },
        kosmetika:  { ring: '#A8B5A0', rail: '#7FB069' },
      }
      return map[this.type] || map.kosmetika
    }
  },
  template: `
    <svg class="w-48 h-48" viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <rect x="40" y="60" width="120" height="80" rx="20" fill="white" stroke="#2D5A4F" stroke-width="2"/>
      <circle cx="100" cy="100" r="25" :fill="palette.ring" opacity="0.3"/>
      <text x="100" y="107" text-anchor="middle" font-size="24" font-weight="700" fill="#1B3B36">{{ letter }}</text>
      <rect x="50" y="120" width="100" height="6" rx="3" :fill="palette.rail"/>
      <circle cx="60" cy="80" r="3" :fill="palette.ring"/>
      <circle cx="140" cy="80" r="3" :fill="palette.ring"/>
    </svg>
  `
}
</script>


