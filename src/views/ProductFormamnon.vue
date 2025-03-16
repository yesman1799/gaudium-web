/* Updated ProductFormamnon.vue for responsiveness */
<template>
  <div class="product-view min-h-screen bg-gray-50 text-center px-4 sm:px-6 md:px-12 pt-40 font-sans animate-fade-in">
    <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-wide animate-zoom-in">FORMAMNON</h1>
    <p class="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed animate-fade-in">Genialita v jednoduchosti a účinnosti.</p>

    <div class="mt-12 max-w-4xl mx-auto px-4 sm:px-8 py-10 bg-white rounded-xl shadow-xl relative">
      <p class="text-lg sm:text-xl text-gray-700 leading-relaxed">
        Formamnon je jedinečný produkt, který spojuje sílu přírody s moderní dermatologií. 
        Jeho genialita spočívá v jednoduchosti – obsahuje pouze 7 pečlivě vybraných složek, 
        které zajišťují vysokou účinnost a bezpečnost.
      </p>
      <p class="text-lg sm:text-xl text-gray-700 mt-4 leading-relaxed">
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

<style scoped>
@keyframes zoomIn {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
.animate-zoom-in { animation: zoomIn 1.5s ease-in-out; }

@media (max-width: 768px) {
  .product-view {
    padding-top: 80px;
  }
  .max-w-4xl {
    max-width: 100%;
  }
  .px-8 {
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>