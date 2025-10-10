<template>
  <div
    class="group rounded-3xl overflow-hidden shadow-lg bg-white flex flex-col transition-all duration-300 hover:shadow-2xl"
  >
    <!-- HERO IMAGE FULL-WIDTH TOP -->
    <div class="relative w-full aspect-[5/3]">
      <img
        :src="product.hero"
        :alt="product?.name ?? 'Product image'"
        class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </div>

    <!-- TEXT CONTENT -->
    <div class="p-6 flex flex-col gap-3">
      <h2 class="text-2xl font-bold text-forest-green group-hover:text-copper-accent transition-colors duration-300">
        {{ product.name }}
      </h2>
      <p class="text-forest-green/80 text-base leading-relaxed">
        {{ product.short }}
      </p>

      <!-- TAGS -->
      <div class="flex flex-wrap gap-2 mt-3">
        <span
          v-for="tag in product.tags"
          :key="tag"
          class="px-3 py-1 text-sm rounded-full bg-forest-green/10 text-forest-green"
        >
          {{ tag }}
        </span>
      </div>

      <!-- CTA BUTTON -->
      <RouterLink
        :to="`/produkty/${product.slug}`"
        class="mt-6 inline-block self-start bg-forest-green text-white px-5 py-2 rounded-full font-medium transition-all duration-300 hover:bg-copper-accent"
      >
        Zobrazit detail
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
/* můžeš přidat drobný přechod stínu */
.group:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}
</style>
