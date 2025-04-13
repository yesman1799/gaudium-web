<template>
  <nav class="flex justify-between items-center px-6 py-4 shadow-md bg-white text-lg font-[Inter]">
    <router-link to="/">
      <img src="@/assets/images/logo-gaudium.jpg" alt="Gaudium Logo" class="h-14 w-auto" />
    </router-link>
    <ul class="flex space-x-6">
      <li><router-link to="/" class="hover:text-primary font-medium">Domů</router-link></li>
      <li><router-link to="/formamnon" class="hover:text-primary font-medium">Formamnon</router-link></li>
      <li><router-link to="/sanusdent" class="hover:text-primary font-medium">Sanusdent</router-link></li>
      <li><router-link to="/contact" class="hover:text-primary font-medium">Kontakt</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

.text-primary {
  @apply text-green-800;
}
</style>
