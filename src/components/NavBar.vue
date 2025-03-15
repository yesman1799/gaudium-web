<template>
  <nav class="bg-white shadow-md fixed w-full top-0 left-0 z-50 py-4">
    <div class="container mx-auto flex justify-between items-center px-6">
      <router-link to="/" class="flex items-center">
        <img src="/src/assets/images/logo-gaudium.jpg" alt="Gaudium Logo" class="h-16" />
      </router-link>
      <ul class="flex space-x-6 text-lg font-semibold text-gray-700">
        <li><router-link to="/" class="hover:text-blue-600 transition">Domů</router-link></li>
        <li><router-link to="/formamnon" class="hover:text-blue-600 transition">Formamnon</router-link></li>
        <li><router-link to="/sanusdent" class="hover:text-blue-600 transition">Sanusdent</router-link></li>
        <li><router-link to="/contact" class="hover:text-blue-600 transition">Kontakt</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
nav {
  padding: 1rem 2rem;
}
</style>