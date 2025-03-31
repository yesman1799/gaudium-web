<template>
  <section class="bg-white text-gray-800 font-sans pt-24">
    <!-- Header -->
    <div class="container mx-auto px-4 py-10">
      <h1 class="text-4xl font-bold text-blue-900 mb-2">SANUSDENT</h1>
      <p class="text-lg text-gray-600">Nepěnivá zubní pasta s Alaptidem</p>
    </div>

    <!-- Divider -->
    <div class="border-t border-gray-200 mb-8"></div>

    <!-- Product Overview -->
    <div class="container mx-auto px-4 space-y-10">
      <div class="grid md:grid-cols-2 gap-8 items-start">
        <div class="space-y-4">
          <h2 class="text-2xl font-semibold text-blue-800">Přírodní péče o zuby a dásně</h2>
          <ul class="list-disc list-inside text-gray-700 leading-relaxed">
            <li>Adstringentní tinktura Mygara (duběnka, myrha, rathania)</li>
            <li>Neuropeptid Alaptid pro regeneraci tkání</li>
            <li>Esenciální oleje z hřebíčku a máty</li>
            <li>Bez fluoridů a agresivních chemikálií</li>
          </ul>
        </div>

        <div class="bg-blue-50 rounded-xl p-6 shadow-md">
          <h3 class="text-xl font-medium text-blue-700 mb-3">Benefity</h3>
          <ul class="space-y-2 text-gray-700">
            <li>✔ Jemná péče bez pěnění</li>
            <li>✔ Prevence krvácení dásní</li>
            <li>✔ Obnova mikroflóry dutiny ústní</li>
            <li>✔ Pomoc při prevenci Alzheimerovy choroby</li>
          </ul>
        </div>
      </div>

      <!-- Technical Info -->
      <div class="grid md:grid-cols-2 gap-8">
        <div>
          <h3 class="text-xl font-semibold text-blue-800 mb-2">Certifikace & Bezpečnost</h3>
          <p class="text-gray-700 mb-2">
            Výrobek je certifikován podle ISO 22716 a ISO 9001. Složení odpovídá
            nařízení Evropského parlamentu a Rady EU č. 1223/2009.
          </p>
          <p class="text-sm text-gray-500">Referenční číslo CPNP: 4345267</p>
        </div>
        <div class="bg-green-50 rounded-xl p-6 shadow-md">
          <h3 class="text-xl font-medium text-green-700 mb-3">Složení</h3>
          <p class="text-sm text-gray-700 leading-relaxed">
            Aqua, Glycerin, Hydrated Silica, Kaolin, Alaptide, Mygara extrakty, Mentha Piperita Oil, Eugenia Caryophyllus Oil, Chlorhexidine Digluconate, atd.
          </p>
        </div>
      </div>

      
    </div>

    <!-- SlideViewer component -->
    <SlideViewer product="sanusdent" class="mt-12 relative" />
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
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}
h1, h2 {
  font-family: 'Inter', sans-serif;
}
</style>

