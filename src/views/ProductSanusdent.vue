<template>
  <div class="product-view relative min-h-screen bg-gray-50 text-center px-6 pt-28 font-sans">
    <h1 class="text-5xl font-extrabold text-gray-900 mb-6 tracking-wide relative">SANUSDENT</h1>
    <p class="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed relative">
      Přírodní péče o zuby a dásně
    </p>

    <div class="mt-12 max-w-4xl mx-auto px-8 py-10 bg-white rounded-xl shadow-xl relative">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Přírodní složení</h2>
      <p class="text-lg text-gray-700 leading-relaxed">
        Nepěnivá zubní pasta Sanusdent je založena na pečlivě vybraných přírodních složkách, 
        jako je adstringentní tinktura Mygara, obsahuje výtažky z duběnky, myrhy a rathanie.
      </p>
      <p class="text-lg text-gray-700 mt-4 leading-relaxed">
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
