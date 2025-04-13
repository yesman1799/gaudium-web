<template>
  <main class="bg-white text-[#232f61] overflow-x-hidden">
    <!-- Hero sekce s pozadím + gradienty do ztracena -->
    <section
      class="relative w-full h-[90vh] bg-no-repeat bg-center bg-cover flex items-center justify-start"
      :style="`background-image: url(${bgFiller}); background-size: 100% 100%;`"
    >
      <!-- Gradienty do stran a spodku -->
      <div class="absolute inset-y-0 left-0 w-[5%] bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div class="absolute inset-y-0 right-0 w-[5%] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 w-full h-[10%] bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>

      <!-- Obsah hero sekce -->
      <div class="relative z-20 text-left text-[#232f61] max-w-3xl px-6 lg:ml-[10%] flex flex-col justify-center h-full translate-y-10">
        <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6 font-serif text-center">
          Přírodní inovace pro zdravou pokožku i úsměv
        </h1>
        <p class="text-lg mb-8 text-center">
          Kosmetika nové generace, která spojuje sílu vědy a přírody. Vyzkoušejte přípravky s Alaptidem pro
          každodenní péči o pleť, ústní dutinu a celkové zdraví.
        </p>
        <div class="flex justify-center">
          <RouterLink to="/formamnon">
            <button class="bg-[#232f61] text-white px-6 py-3 font-semibold rounded hover:bg-[#1b254f] transition transform hover:scale-105 duration-300">
              Zjistit více
            </button>
          </RouterLink>
        </div>
      </div>

      <!-- Šipka dolů -->
      <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <a href="#about" class="block w-10 h-10 border-b-4 border-r-4 border-[#232f61] rotate-45 transform hover:scale-110 transition duration-300"></a>
      </div>
    </section>

    <!-- Info sekce jako "O nás" -->
    <section id="about" class="relative bg-[#f5f7fb] border-[3px] border-[#232f61] rounded-xl py-28 px-6 md:px-16 mt-20 mx-4 shadow-md overflow-hidden">
      <!-- Dekorativní gradienty jako efekt do ztracena -->
      <div class="absolute inset-y-0 left-0 w-[5%] bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
      <div class="absolute inset-y-0 right-0 w-[5%] bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

      <div class="max-w-4xl mx-auto text-left relative z-10">
        <h2 class="text-4xl font-serif font-bold mb-10 text-[#232f61] border-b border-[#232f61] pb-4 text-center">O nás</h2>
        <div class="space-y-6 text-[18px] leading-relaxed text-[#232f61] font-light text-justify">
          <p>
            Naše společnost byla založena v roce 2022 a specializuje se na vývoj a výrobu kosmetiky.
            Jsme tým odborníků, kteří se zaměřují na inovativní a účinné kosmetické produkty,
            které přinášejí skutečnou hodnotu pro zdraví pokožky a celkovou pohodu.
          </p>
          <p>
            Výjimečnost našich produktů spočívá v pečlivě vybraném složení bylin a neuropeptidu Alaptid,
            který se podílí na jejich výjimečné účinnosti a bezpečnosti.
            Tento pečlivý výběr složek zajišťuje, že produkty poskytují efektivní a zároveň šetrnou péči
            pro pokožku a ústní dutinu.
          </p>
          <p>
            V letošním roce plánujeme rozšíření našeho portfolia o další inovativní produkty,
            včetně denních a nočních krémů, regeneračního tělového mléka (tyto produkty jsou již v EU notifikovány),
            dále máme ve vývoji gel na popáleniny, po kousnutí hmyzem a krém na ekzém.
            Dále připravujeme na trh také doplňky stravy, které svou unikátní kombinací dosud nikde na trhu nejsou nabízeny
            (prevence onko, podpora kognitivních funkcí mozku, prevence alergií).
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import bgFiller from '@/assets/images/bg-filler.jpg';
</script>

<style scoped>
html, body {
  scroll-behavior: smooth;
}
</style>

