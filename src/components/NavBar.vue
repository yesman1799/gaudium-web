<template>
  <nav class="bg-gray-900 text-white p-5 shadow-md flex justify-between items-center">
    <router-link to="/" class="flex items-center gap-4">
      <img src="/src/assets/images/logo-gaudium.jpg" alt="Gaudium Logo" class="h-12">
      <h1 class="text-2xl font-bold tracking-wide hover:text-green-400 transition">Gaudium2022</h1>
    </router-link>
    <div class="flex gap-6 text-lg">
      <router-link to="/" class="hover:text-green-400 transition">Domů</router-link>
      <router-link to="/formamnon" class="hover:text-green-400 transition">Formamnon</router-link>
      <router-link to="/sanusdent" class="hover:text-green-400 transition">Sanusdent</router-link>
      <router-link to="/contact" class="hover:text-green-400 transition">Kontakt</router-link>
    </div>
  </nav>
</template>
