<template>
  <div class="pt-20 px-6 md:px-12">
    <!-- Hero Section -->
    <header class="text-center py-24 bg-gradient-to-r from-[#452671] to-purple-600 shadow-lg text-white">
      <div class="max-w-5xl mx-auto px-6">
        <h1 class="text-5xl font-extrabold">Formamnon – Genialita v jednoduchosti a účinnosti</h1>
        <p class="mt-6 text-xl">
          Formamnon je jedinečný produkt, který spojuje sílu přírody s moderní dermatologií. Obsahuje pouze 7 pečlivě vybraných složek, které zajišťují vysokou účinnost a bezpečnost.
        </p>
      </div>
    </header>

    <!-- Product Details Section -->
    <section class="py-20 max-w-6xl mx-auto text-center">
      <h2 class="text-4xl font-bold text-[#452671]">Bezkonkurenční účinnost na trhu</h2>
      <p class="mt-6 text-lg text-gray-700">
        Xylopie a tea tree olej poskytují silnou antimikrobiální a antimykotickou účinnost, zatímco šalvěj přináší příznivé účinky na pleť a pomáhá snižovat nadměrné pocení.
      </p>
    </section>

    <!-- Natural Ingredients Section -->
    <section class="bg-gray-100 py-20 px-6 md:px-12">
      <h2 class="text-4xl font-bold text-center text-[#452671]">Přírodní a ověřené</h2>
      <p class="mt-6 text-xl max-w-4xl mx-auto text-gray-700 text-center">
        Formamnon je vyroben většinou z přírodních látek, které zajišťují jeho šetrnost a vysokou účinnost. Nezapomínáme ani na neuropeptid Alaptid, jehož regenerační účinky jsou dobře známé.
      </p>
    </section>

    <!-- Scientific Background -->
    <section class="py-20 px-6 md:px-12">
      <h2 class="text-4xl font-bold text-center text-[#452671]">Pod vedením odborníků</h2>
      <p class="mt-6 text-xl max-w-4xl mx-auto text-gray-700 text-center">
        Formamnon je výsledkem dlouholetého výzkumu pod vedením dermatologa s více než 40 lety praxe v oboru.
      </p>
    </section>

    <!-- Slideshow Component -->
    <SlideViewer product="formamnon" class="mt-12 relative" />
  </div>
</template>

<script>
import SlideViewer from "@/components/SlideViewer.vue";

export default {
  name: "ProductFormamnon",
  components: {
    SlideViewer,
  },
};
</script>

<style scoped>
body {
  font-family: 'Roboto', sans-serif;
}
h1, h2 {
  font-family: 'Roboto', sans-serif;
}
</style>
