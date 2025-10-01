<template>
  <section class="bg-white text-[#232f61]">
    <div class="max-w-screen-xl mx-auto px-4 py-12 font-sans">
      <h2 class="text-3xl md:text-4xl font-bold mb-8 font-serif">Gloria – Denní krém a tělové mléko</h2>

      <p class="text-lg leading-relaxed mb-6">
        Gloria je inovativní řada kosmetiky, která kombinuje sílu přírody s moderními dermatologickými poznatky. 
        Nabízíme denní krém pro péči o obličej a tělové mléko pro péči o celé tělo. 
        Oba produkty obsahují pečlivě vybrané složky, které zajišťují vysokou účinnost a bezpečnost pro vaši pokožku.
      </p>

      <h3 class="text-2xl font-semibold mt-8 mb-4 font-serif">Denní krém</h3>
      <p class="text-lg leading-relaxed mb-6">
        Denní krém Gloria poskytuje intenzivní hydrataci a výživu pokožky. Jeho lehká textura se rychle vstřebává 
        a zanechává pokožku měkkou, pružnou a svěží po celý den. Obohacen o neuropeptid <strong>Alaptid</strong>, 
        který podporuje regeneraci a obnovu pokožky.
      </p>

      <h3 class="text-2xl font-semibold mt-8 mb-4 font-serif">Tělové mléko</h3>
      <p class="text-lg leading-relaxed mb-6">
        Regenerační tělové mléko Gloria je určeno pro komplexní péči o pokožku celého těla. 
        Jeho bohatá formulace intenzivně hydratuje, vyživuje a regeneruje suchou a namáhanou pokožku. 
        Pravidelné používání zanechává pokožku hedvábně hladkou a pružnou.
      </p>

      <h3 class="text-2xl font-semibold mt-8 mb-4 font-serif">Přírodní složení s Alaptidem</h3>
      <p class="text-lg leading-relaxed mb-6">
        Produkty Gloria obsahují <strong>neuropeptid Alaptid</strong>, který je klíčovou složkou pro podporu 
        regenerace pokožky a její ochranu. V kombinaci s přírodními oleji a výtažky poskytují komplexní 
        péči pro zdravou a krásnou pokožku.
      </p>

      <p class="text-lg leading-relaxed mb-10">
        Produkty Gloria jsou již notifikovány v EU a jsou připraveny přinést vám špičkovou péči o pokožku. 
        Vhodné pro každodenní použití a všechny typy pleti.
      </p>

      <GloriaCarousel />
    </div>
  </section>
</template>

<script setup>
import GloriaCarousel from '@/components/GloriaCarousel.vue'
</script>

<style scoped>
.font-serif {
  font-family: 'Playfair Display', serif;
}
</style>
