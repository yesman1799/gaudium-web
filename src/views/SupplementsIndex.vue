<script setup>
import { supplements } from '@/data/supplements'
</script>

<template>
  <section class="mx-auto max-w-6xl px-4 py-12">
    <header class="mb-8">
      <h1 class="text-3xl font-semibold">Suplementy / doplňky stravy</h1>
      <p class="mt-2 text-zinc-600">Vyber si produkt pro detailní popis, benefity a kde koupit.</p>
    </header>

    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <router-link
        v-for="p in supplements.filter(s => s.slug !== 'tbd-4th-product')"
        :key="p.slug"
        :to="`/suplementy/${p.slug}`"
        class="group relative overflow-hidden rounded-2xl border border-zinc-200/60 bg-white p-6 shadow-sm transition hover:shadow-md"
      >
        <div class="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br" :class="[p.theme.from, p.theme.to]"></div>

        <div class="relative">
          <h3 class="text-xl font-bold text-zinc-900">{{ p.name }}</h3>
          <p class="mt-2 text-zinc-700 line-clamp-3" v-html="p.short" />
          <div class="mt-4 flex flex-wrap gap-2">
            <span v-for="t in p.tags" :key="t"
              class="rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-zinc-700 ring-1 ring-zinc-200/70">
              {{ t }}
            </span>
          </div>

          <div class="mt-5 inline-flex items-center gap-2 font-medium text-zinc-900">
            Detail <span aria-hidden="true">→</span>
          </div>
        </div>
      </router-link>
    </div>
  </section>
</template>
