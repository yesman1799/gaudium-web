<template>
  <section class="bg-white text-[#232f61]">
    <div class="max-w-screen-xl mx-auto px-4 py-12 font-sans">
      <h2 class="text-3xl md:text-4xl font-bold mb-8 font-serif">
        Sanusdent – Přírodní péče o zuby a dásně
      </h2>

      <!-- Blok 1 -->
      <h3 class="text-2xl font-semibold mt-8 mb-4 font-serif">Přírodní složení</h3>
      <p class="text-lg leading-relaxed mb-6">
        Nepěnivá zubní pasta Sanusdent je založena na pečlivě vybraných přírodních složkách,
        jako je adstringentní tinktura Mygara, obsahuje výtažky z duběnky, myrhy a rathanie.
        Tyto složky poskytují jemnou péči o dásně a účinně zabraňují jejich krvácivosti.
        Je obohacena o neuropeptid <strong>Alaptid</strong> pro lepší ochranu a zdraví zubů.
        Je ideální pro osoby, které hledají šetrnou péči o zuby a dásně, aniž by zatěžovaly ústní dutinu.
      </p>

      <!-- Blok 2 -->
      <h3 class="text-2xl font-semibold mt-8 mb-4 font-serif">Svěžest a pohodlí</h3>
      <p class="text-lg leading-relaxed mb-6">
        Esenciální oleje z hřebíčku a máty dodávají dlouhotrvající svěžest dechu a příjemný
        pocit v ústech, což činí používání pasty příjemným zážitkem po celý den.
      </p>

      <!-- Blok 3 -->
      <h3 class="text-2xl font-semibold mt-8 mb-4 font-serif">Inovativní technologie</h3>
      <p class="text-lg leading-relaxed mb-6">
        Hlavní složkou této nepěnivé zubní pasty je neuropeptid <strong>Alaptid</strong>,
        dobře prozkoumaný analog tělu vlastní látky, který vykazuje mimořádné klinicky ověřené
        vlastnosti pro lokální použití. Alaptid podporuje obnovu tkání a udržuje zdravou mikroflóru
        v ústní dutině, což přispívá k lepší ochraně dásní a zubů.
      </p>

      <!-- Blok 4 -->
      <h3 class="text-2xl font-semibold mt-8 mb-4 font-serif">Jemná a šetrná péče</h3>
      <p class="text-lg leading-relaxed mb-6">
        Zubní pasta Sanusdent je navržena pro každodenní použití, neobsahuje fluor,
        kyselinu laurovou ani její deriváty, ani žádné jiné agresivní chemikálie.
        Velmi šetrná abraziva zajišťují jemné čištění bez podráždění.
        Tato pasta je tedy ideální pro každodenní péči o zuby a dásně, aniž by docházelo
        k poškození skloviny nebo podráždění.
      </p>

      <!-- Blok 5 -->
      <h3 class="text-2xl font-semibold mt-8 mb-4 font-serif">Prevence a výzkum</h3>
      <p class="text-lg leading-relaxed mb-6">
        Podle nedávného výzkumu je bakterie <strong>Porphyromonas gingivalis</strong> spojována
        s Alzheimerovou chorobou. Tato bakterie, běžně způsobující onemocnění dásní, byla nalezena
        v mozcích pacientů trpících Alzheimerovou chorobou, kde se předpokládá, že přispívá
        k rozvoji onemocnění a tvorbě beta-amyloidních plaků v mozku.
      </p>

      <!-- Blok 6 -->
      <h3 class="text-2xl font-semibold mt-8 mb-4 font-serif">Prevence Alzheimerovy choroby</h3>
      <p class="text-lg leading-relaxed mb-10">
        Neuropeptid <strong>Alaptid</strong> obsažený v této nepěnivé zubní pastě má schopnost
        výrazně potlačit tvorbu této bakterie, což může přispět k prevenci Alzheimerovy choroby.
        Pravidelným čištěním zubů tak pomáháme v prevenci tohoto závažného zdravotního problému.
        Zubní pasta Sanusdent je tedy nejen ideální pro každodenní péči o ústní dutinu, ale také
        představuje pokrok v oblasti prevence závažných onemocnění.
      </p>

      <!-- Carousel -->
      <SanusdentCarousel />
    </div>
  </section>
</template>

<script setup>
import SanusdentCarousel from '@/components/SanusdentCarousel.vue'
</script>

<style scoped>
.font-serif {
  font-family: 'Playfair Display', serif;
}
</style>
