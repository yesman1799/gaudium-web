<template>
  <div class="product-view relative min-h-screen bg-gray-50 text-center px-6 pt-28 font-sans">
    <h1 class="text-5xl font-extrabold text-gray-900 mb-6 tracking-wide relative">FORMAMNON</h1>
    <p class="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed relative">
      Genialita v jednoduchosti a účinnosti
    </p>

    <div class="mt-12 max-w-4xl mx-auto px-8 py-10 bg-white rounded-xl shadow-xl relative">
      <p class="text-lg text-gray-700 leading-relaxed">
        Formamnon je jedinečný produkt, který spojuje sílu přírody s moderní dermatologií. 
        Jeho genialita spočívá v jednoduchosti – obsahuje pouze 7 pečlivě vybraných složek, 
        které zajišťují vysokou účinnost a bezpečnost.
      </p>
      <p class="text-lg text-gray-700 mt-4 leading-relaxed">
        Tento přípravek není určen pouze pro mykotické infekce prstů na nohou, ale je účinný 
        i na širokou škálu dalších kožních problémů po celém těle.
      </p>
    </div>

    <!-- Slideshow Component -->
    <SlideViewer product="formamnon" class="mt-12 relative" />
  </div>
</template>

<script>
import SlideViewer from "@/components/SlideViewer.vue";

export default {
  components: {
    SlideViewer,
  },
};
</script>
