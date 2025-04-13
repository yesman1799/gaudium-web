<template>
  <section class="bg-white text-[#232f61]">
    <div class="max-w-screen-xl mx-auto px-4 py-12 font-sans">
      <h2 class="text-3xl md:text-4xl font-bold mb-8 font-serif">Formamnon – Genialita v jednoduchosti a účinnosti</h2>

      <p class="text-lg leading-relaxed mb-6">
        Formamnon je jedinečný produkt, který spojuje sílu přírody s moderní dermatologií. Jeho genialita spočívá v jednoduchosti – obsahuje pouze 7 pečlivě vybraných složek, které zajišťují vysokou účinnost a bezpečnost. Tento přípravek není určen pouze pro mykotické infekce prstů na nohou, ale je účinný i na širokou škálu dalších kožních problémů po celém těle.
      </p>

      <p class="text-lg leading-relaxed mb-6">
        Je určen při léčbě kožních plísňových infekcí a jeho účinnost je podporována unikátním složením bylin a neuropeptidu <strong>Alaptid</strong>.
      </p>

      <h3 class="text-2xl font-semibold mt-8 mb-4 font-serif">Bezkonkurenční účinnost na trhu</h3>
      <p class="text-lg leading-relaxed mb-6">
        <strong>Xylopie</strong> a <strong>tea tree olej</strong> poskytují silnou antimikrobiální a antimykotickou účinnost, zatímco <strong>šalvěj</strong> přináší příznivé účinky na pleť a pomáhá snižovat nadměrné pocení. Účinnost Formamnonu je dále posílena konzervačním přípravkem s obsahem stříbra, určeným pro kosmetické produkty tohoto typu. Nezapomínáme ani na <strong>neuropeptid Alaptid</strong>, jehož regenerační účinky a fenomenální mechanismus působení jsou dobře známé.
      </p>

      <h3 class="text-2xl font-semibold mt-8 mb-4 font-serif">Přírodní a ověřené</h3>
      <p class="text-lg leading-relaxed mb-6">
        Formamnon je vyroben většinou z přírodních látek, které zajišťují jeho šetrnost a vysokou účinnost. Naproti tomu <strong>Alaptid</strong> a <strong>JMAC</strong> jsou laboratorně syntetizované (stříbro je v položce JM Active care přidáváno na titanové bělobě). Tato kombinace výrazně zvyšuje bezpečnost a účinnost produktu při léčbě dermatomykóz.
      </p>

      <p class="text-lg leading-relaxed mb-10">
        Tento ověřený produkt prokázal statisticky významný účinek u mnoha pacientů v boji proti mykózám a kožním problémům. Formamnon je dokonalou kombinací tradičního umění a moderní dermatologie, vytvořený pod vedením dermatologa s více než 40 lety praxe v oboru.
      </p>

      <FormamnonCarousel />

      <div class="mt-10 text-center">
        <a
          href="/assets/presentations/formamnon"
          target="_blank"
          class="inline-block bg-[#232f61] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#2f3c7e] transition"
        >
          Otevřít prezentaci
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import FormamnonCarousel from '@/components/FormamnonCarousel.vue'
</script>

<style scoped>
.font-serif {
  font-family: 'Playfair Display', serif;
}
</style>
