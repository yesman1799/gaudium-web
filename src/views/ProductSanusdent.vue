<template>
 <!-- TODO: Nahodit stejny design jako Formamnon -->
 
 <section class="container mx-auto px-4 py-12">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <img
          src="@\assets\images\hero-bg.png"
          alt="Sanusdent"
          class="w-full max-w-md mx-auto"
        />
      </div>
      <div class="space-y-6">
        <h1 class="text-4xl font-bold text-gray-900">Sanusdent – Přírodní péče o zuby a dásně</h1>

        <div class="space-y-4 text-lg text-gray-700">
          <h2 class="text-2xl font-semibold">Přírodní složení</h2>
          <p>
            Nepěnivá zubní pasta Sanusdent je založena na pečlivě vybraných přírodních složkách,
            jako je adstringentní tinktura Mygara, obsahuje výtažky z duběnky, myrhy a rathanie.
            Tyto složky poskytují jemnou péči o dásně a účinně zabraňují jejich krvácivosti.
            Je obohacena o neuropeptid Alaptid pro lepší ochranu a zdraví zubů. Je ideální pro osoby,
            které hledají šetrnou péči o zuby a dásně, aniž by zatěžovaly ústní dutinu.
          </p>

          <h2 class="text-2xl font-semibold">Svěžest a pohodlí</h2>
          <p>
            Esenciální oleje z hřebíčku a máty dodávají dlouhotrvající svěžest dechu a příjemný
            pocit v ústech, což činí používání pasty příjemným zážitkem po celý den.
          </p>

          <h2 class="text-2xl font-semibold">Inovativní technologie</h2>
          <p>
            Hlavní složkou této nepěnivé zubní pasty je neuropeptid Alaptid, dobře prozkoumaný
            analog tělu vlastní látky, který vykazuje mimořádné klinicky ověřené vlastnosti pro
            lokální použití. Alaptid podporuje obnovu tkání a udržuje zdravou mikroflóru v ústní
            dutině, což přispívá k lepší ochraně dásní a zubů.
          </p>

          <h2 class="text-2xl font-semibold">Jemná a šetrná péče</h2>
          <p>
            Zubní pasta Sanusdent je navržena pro každodenní použití, neobsahuje fluor, kyselinu
            laurovou ani její deriváty, ani žádné jiné agresivní chemikálie. Velmi šetrná abraziva
            zajišťují jemné čištění bez podráždění. Tato pasta je tedy ideální pro každodenní péči
            o zuby a dásně, aniž by docházelo k poškození skloviny nebo podráždění.
          </p>

          <h2 class="text-2xl font-semibold">Prevence a výzkum</h2>
          <p>
            Podle nedávného výzkumu je bakterie Porphyromonas gingivalis spojována s Alzheimerovou
            chorobou. Tato bakterie, běžně způsobující onemocnění dásní, byla nalezena v mozcích
            pacientů trpících Alzheimerovou chorobou, kde se předpokládá, že přispívá k rozvoji
            onemocnění a tvorbě beta-amyloidních plaků v mozku.
          </p>

          <h2 class="text-2xl font-semibold">Prevence Alzheimerovy choroby</h2>
          <p>
            Neuropeptid Alaptid obsažený v této nepěnivé zubní pastě má schopnost výrazně potlačit
            tvorbu této bakterie, což může přispět k prevenci Alzheimerovy choroby. Pravidelným
            čištěním zubů tak pomáháme v prevenci tohoto závažného zdravotního problému.
            Zubní pasta Sanusdent je tedy nejen ideální pro každodenní péči o ústní dutinu,
            ale také představuje pokrok v oblasti prevence závažných onemocnění.
          </p>
        </div>

        <a
          href="/files/SANUSDENT-CZ-2025.pdf"
          target="_blank"
          class="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Stáhnout prezentaci
        </a>
      </div>
    </div>
    <!-- TODO: vytvorit component na SanusdentCarousel -->
  </section>
</template>

<script>
export default {
  name: 'ProductSanusdent',
};
</script>
