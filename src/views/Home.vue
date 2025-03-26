// Home.vue
<template>
  <div class="pt-20"> <!-- Added padding to prevent navbar overlap -->
    <!-- Hero Section -->
    <header class="text-center py-24 bg-gradient-to-r from-[#452671] to-purple-600 shadow-lg text-white">
      <div class="max-w-5xl mx-auto px-6">
        <h2 class="text-5xl font-extrabold">Vítejte na stránkách společnosti Gaudium2022 s.r.o.</h2>
        <p class="mt-6 text-xl">
          Naše společnost byla založena v roce 2022 a specializuje se na vývoj a výrobu kosmetiky.
          Jsme tým odborníků, kteří se zaměřují na inovativní a účinné kosmetické produkty,
          které přinášejí skutečnou hodnotu pro zdraví pokožky a celkovou pohodu.
        </p>
      </div>
    </header>

    <!-- Products Section -->
    <section id="products" class="py-20 px-6 md:px-12">
      <h2 class="text-4xl font-bold text-center text-[#452671]">Naše hlavní produkty</h2>
      <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div class="bg-white p-10 shadow-xl text-center rounded-xl border border-gray-200 transform hover:scale-105 transition" v-for="product in products" :key="product.id">
          <h3 class="text-3xl font-semibold text-gray-800">{{ product.name }}</h3>
          <p class="mt-4 text-lg text-gray-600">{{ product.description }}</p>
          <router-link :to="product.route">
            <button class="mt-6 bg-[#452671] text-white py-3 px-6 rounded-lg hover:bg-[#3a1e5b] transition">Více informací</button>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Unique Features Section -->
    <section class="bg-gray-100 py-20 px-6 md:px-12">
      <h2 class="text-4xl font-bold text-center text-[#452671]">Unikátnost našich produktů</h2>
      <p class="mt-6 text-xl max-w-4xl mx-auto text-gray-700 text-center">
        Výjimečnost našich produktů spočívá v pečlivě vybraném složení bylin a neuropeptidu Alaptid,
        který se podílí na jejich výjimečné účinnosti a bezpečnosti. Tento pečlivý výběr složek zajišťuje,
        že produkty poskytují efektivní a zároveň šetrnou péči pro pokožku a ústní dutinu.
      </p>
    </section>

    <!-- Future Products Section -->
    <section class="py-20 px-6 md:px-12">
      <h2 class="text-4xl font-bold text-center text-[#452671]">Naše budoucí produkty</h2>
      <p class="mt-6 text-xl max-w-4xl mx-auto text-gray-700 text-center">
        V letošním roce plánujeme rozšíření našeho portfolia o další inovativní produkty,
        včetně denních a nočních krémů, regeneračního tělového mléka, gelu na popáleniny,
        krému na ekzém a dalších doplňků stravy.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      products: [
        { id: 1, name: "FORMAMNON", description: "Gel proti dermatomykózám.", route: "/formamnon" },
        { id: 2, name: "SANUSDENT", description: "Nepěnivá zubní pasta.", route: "/sanusdent" }
      ]
    };
  }
};
</script>

<style scoped>
body {
  font-family: 'Roboto', sans-serif;
}
h2 {
  font-family: 'Roboto', sans-serif;
}
</style>
