/* Updated ProductSanusdent.vue for responsiveness */
<template>
  <div class="product-view min-h-screen bg-gray-50 text-center px-4 sm:px-6 md:px-12 pt-40 font-sans animate-fade-in">
    <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-wide animate-slide-right">SANUSDENT</h1>
    <p class="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed animate-fade-in">Přírodní péče o zuby a dásně.</p>

    <div class="mt-12 max-w-4xl mx-auto px-4 sm:px-8 py-10 bg-white rounded-xl shadow-xl relative">
      <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Přírodní složení</h2>
      <p class="text-lg sm:text-xl text-gray-700 leading-relaxed">
        Nepěnivá zubní pasta Sanusdent je založena na pečlivě vybraných přírodních složkách, 
        jako je adstringentní tinktura Mygara, obsahuje výtažky z duběnky, myrhy a rathanie.
      </p>
      <p class="text-lg sm:text-xl text-gray-700 mt-4 leading-relaxed">
        Tyto složky poskytují jemnou péči o dásně a účinně zabraňují jejich krvácivosti. 
        Je obohacena o neuropeptid Alaptid pro lepší ochranu a zdraví zubů.
      </p>
    </div>

    <!-- Slideshow Component -->
    <SlideViewer product="sanusdent" class="mt-12 relative" />
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
@keyframes slideRight {
  from { transform: translateX(30px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
.animate-slide-right { animation: slideRight 1.5s ease-in-out; }

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
