<template>
  <section class="bg-white text-gray-800 font-sans pt-24">
    <!-- Header -->
    <div class="container mx-auto px-4 py-10">
      <h1 class="text-4xl font-bold text-blue-900 mb-4">SANUSDENT</h1>
      <p class="text-lg text-gray-600">Nepěnivá zubní pasta s Alaptidem</p>
    </div>

    <!-- Divider -->
    <div class="border-t border-gray-200 mb-10"></div>

    <!-- Informational Content -->
    <div class="container mx-auto px-4 space-y-10 max-w-5xl text-gray-700 text-base sm:text-lg leading-relaxed">
      <section>
        <h2 class="text-2xl font-semibold text-blue-800 mb-2">Přírodní péče o zuby a dásně</h2>
        <p>
          Nepěnivá zubní pasta Sanusdent je založena na pečlivě vybraných přírodních složkách, jako je adstringentní tinktura Mygara, obsahuje výtažky z duběnky, myrhy a rathanie. Tyto složky poskytují jemnou péči o dásně a účinně zabraňují jejich krvácivosti. Je obohacena o neuropeptid Alaptid pro lepší ochranu a zdraví zubů. Je ideální pro osoby, které hledají šetrnou péči o zuby a dásně, aniž by zatěžovaly ústní dutinu.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-blue-800 mb-2">Svěžest a pohodlí</h2>
        <p>
          Esenciální oleje z hřebíčku a máty dodávají dlouhotrvající svěžest dechu a příjemný pocit v ústech, což činí používání pasty příjemným zážitkem po celý den.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-blue-800 mb-2">Inovativní technologie</h2>
        <p>
          Hlavní složkou této nepěnivé zubní pasty je neuropeptid Alaptid, dobře prozkoumaný analog tělu vlastní látky, který vykazuje mimořádné klinicky ověřené vlastnosti pro lokální použití. Alaptid podporuje obnovu tkání a udržuje zdravou mikroflóru v ústní dutině, což přispívá k lepší ochraně dásní a zubů.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-blue-800 mb-2">Jemná a šetrná péče</h2>
        <p>
          Zubní pasta Sanusdent je navržena pro každodenní použití, neobsahuje fluor, kyselinu laurovou ani její deriváty, ani žádné jiné agresivní chemikálie. Velmi šetrná abraziva zajišťují jemné čištění bez podráždění. Tato pasta je tedy ideální pro každodenní péči o zuby a dásně, aniž by docházelo k poškození skloviny nebo podráždění.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-blue-800 mb-2">Prevence a výzkum</h2>
        <p>
          Podle nedávného výzkumu je bakterie Porphyromonas gingivalis spojována s Alzheimerovou chorobou. Tato bakterie, běžně způsobující onemocnění dásní, byla nalezena v mozcích pacientů trpících Alzheimerovou chorobou, kde se předpokládá, že přispívá k rozvoji onemocnění a tvorbě beta-amyloidních plaků v mozku.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-blue-800 mb-2">Prevence Alzheimerovy choroby</h2>
        <p>
          Neuropeptid Alaptid obsažený v této nepěnivé zubní pastě má schopnost výrazně potlačit tvorbu této bakterie, což může přispět k prevenci Alzheimerovy choroby. Pravidelným čištěním zubů tak pomáháme v prevenci tohoto závažného zdravotního problému.
        </p>
        <p class="mt-2">
          Zubní pasta Sanusdent je tedy nejen ideální pro každodenní péči o ústní dutinu, ale také představuje pokrok v oblasti prevence závažných onemocnění.
        </p>
      </section>
    </div>

    <!-- SlideViewer component -->
    <div class="container mx-auto px-4 mt-16 max-w-5xl">
      <SlideViewer product="sanusdent" />
    </div>
  </section>
</template>

<script>
import SlideViewer from "@/components/SlideViewer.vue";

export default {
  name: "sanusdent",
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
