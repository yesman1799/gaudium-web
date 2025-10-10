<template>
  <article
    v-on-view
    class="bg-white rounded-3xl overflow-hidden shadow-2xl hover-lift slide-in-right"
    :class="delay"
  >
    <!-- HERO -->
    <div
      :class="[
        'relative h-72 md:h-84 lg:h-96 bg-gradient-to-br flex items-center justify-center',
        product.theme?.from || 'from-mint-light/20',
        product.theme?.to || 'to-forest-green/20'
      ]"
    >
      <template v-if="product.hero">
        <img
          :src="product.hero"
          :alt="product.name"
          class="h-full w-full object-contain object-center md:scale-[1.08] lg:scale-[1.12] transition-transform duration-300"
          loading="lazy"
        />
      </template>
      <template v-else>
        <Packshot :type="product.type" :letter="product.name?.[0] || 'G'" />
      </template>
    </div>

    <!-- CONTENT -->
    <div class="p-10 flex flex-col gap-6">
      <div>
        <h3 class="text-3xl font-bold text-forest-dark mb-3">{{ product.name }}</h3>

        <p v-if="product.tagline" class="text-forest-green/90 mb-1 font-medium italic">
          {{ product.tagline }}
        </p>

        <p class="text-forest-green/80 mb-8 text-lg leading-relaxed">
          {{ product.short }}
        </p>
      </div>

      <div class="flex items-center justify-between flex-wrap gap-3">
        <div class="flex items-center gap-2 flex-wrap">
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

        <!-- původní tlačítko -->
        <RouterLink
          :to="'/produkty/'+product.slug"
          class="bg-gradient-to-r from-forest-green to-mint-light text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all"
        >
          Detail
        </RouterLink>
      </div>

      <!-- 🛒 SHOP LINKS -->
      <div v-if="product.buyLinks?.length" class="mt-2 border-t border-forest-green/10 pt-6">
        <p class="text-forest-green/80 mb-4">
          Zakoupíte u našich ověřených partnerů. Kliknutím přejdete na e-shop (otevře se v&nbsp;nové záložce).
        </p>

        <div class="flex flex-wrap gap-3">
          <a
            v-for="link in product.buyLinks"
            :key="link.url"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-forest-green/10 bg-mint-light/10 hover:bg-mint-light/20 hover:border-forest-green/20 transition-colors"
          >
            <!-- ikonka podle e-shopu -->
            <ShopIcon :shop="link.name" :url="link.url" class="w-5 h-5 text-forest-green/80 group-hover:text-forest-green" />
            <span class="text-sm font-medium text-forest-green">{{ link.name }}</span>
            <svg class="w-4 h-4 text-forest-green/60 group-hover:text-forest-green" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 0 1 0-1.06l7.22-7.22H8.5a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7.56l-7.22 7.22a.75.75 0 0 1-1.06 0z" clip-rule="evenodd"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  product: { type: Object, required: true },
  delay: { type: String, default: '' },
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
    },
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
  `,
}

/**
 * Ikonka e-shopu dle názvu/URL (monochrom, čisté tvary).
 * Nepotřebuje žádné externí assety.
 */
const ShopIcon = {
  props: { shop: String, url: String },
  computed: {
    key() {
      const s = (this.shop || this.url || '').toLowerCase()
      if (s.includes('zdrave-plody'))   return 'zdrave'
      if (s.includes('detoxikace'))     return 'detox'
      if (s.includes('nanoagtive'))     return 'nano'
      if (s.includes('salveo'))         return 'salveo'
      return 'default'
    },
  },
  template: `
    <svg v-if="key==='zdrave'" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <!-- list/leaf -->
      <path d="M20 4c-7.5 0-12.5 4.7-14.7 9.9-.6 1.4.7 2.9 2.1 2.5 4.9-1.3 9.6-5.6 11.6-8.6-.6 3.2-3.1 7.3-6.7 10.2-.9.7-.5 2.1.7 2.2 5 .5 8-3.9 8-9.7 0-2.4-.3-4.2-1-6.5Z"/>
    </svg>

    <svg v-else-if="key==='detox'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <!-- medical cross in rounded square -->
      <rect x="3.5" y="3.5" width="17" height="17" rx="3.5"/>
      <path d="M12 7.5v9M7.5 12h9"/>
    </svg>

    <svg v-else-if="key==='nano'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <!-- simple atom -->
      <circle cx="12" cy="12" r="1.8" fill="currentColor"/>
      <ellipse cx="12" cy="12" rx="8" ry="3.5"/>
      <ellipse cx="12" cy="12" rx="3.5" ry="8" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="3.5" ry="8" transform="rotate(-60 12 12)"/>
    </svg>

    <svg v-else-if="key==='salveo'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <!-- capsule -->
      <path d="M8 16l8-8m-6.5 9.5a4.5 4.5 0 0 1-6.4-6.4l5-5a4.5 4.5 0 0 1 6.4 6.4l-5 5Z"/>
    </svg>

    <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <!-- generic bag -->
      <path d="M6 8h12l-1 11H7L6 8Z"/>
      <path d="M9 8V6a3 3 0 1 1 6 0v2"/>
    </svg>
  `,
}
</script>
