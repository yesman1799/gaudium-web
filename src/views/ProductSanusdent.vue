<template>
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
        <p class="text-lg text-gray-700">
          Sanusdent je nepěnivá zubní pasta obohacená o neuropeptid <strong>Alaptid</strong>, která byla
          vyvinuta pro každodenní šetrnou péči o dásně a zuby. Díky unikátním přírodním složkám
          pomáhá předcházet krvácení dásní, udržovat zdravou mikroflóru ústní dutiny a navíc
          osvěžuje dech.
        </p>
        <ul class="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Neobsahuje fluor</strong>, kyselinu laurovou ani jiné agresivní chemikálie</li>
          <li>Velmi šetrná abraziva (RDA ~ 25)</li>
          <li>Alaptid podporuje <strong>regeneraci tkání a prevenci zánětů</strong></li>
          <li><strong>Výtažky z duběnky, myrhy a rathanie</strong> pro péči o dásně</li>
          <li><strong>Esenciální oleje</strong> z hřebíčku a máty pro svěží dech</li>
          <li>Přirozená <strong>prevence Alzheimerovy choroby</strong> skrze potlačení P. gingivalis</li>
        </ul>
        <p class="text-lg text-gray-700">
          Díky své jemnosti je Sanusdent ideální i pro citlivou ústní dutinu a každodenní použití.
        </p>
        <a
          href="/files/SANUSDENT-CZ-2025.pdf"
          target="_blank"
          class="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Stáhnout prezentaci
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductSanusdent',
};
</script>
