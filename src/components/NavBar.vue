/* Updated NavBar.vue for better alignment of logo and hamburger menu */
<template>
  <nav class="bg-white shadow-md fixed w-full top-0 left-0 z-50 py-4">
    <div class="container mx-auto flex justify-between items-center px-6">
      <router-link to="/" class="flex items-center">
        <img src="/src/assets/images/logo-gaudium.jpg" alt="Gaudium Logo" class="h-16" />
      </router-link>
      
      <!-- Navigation Links for Desktop -->
      <ul class="hidden md:flex space-x-6 text-lg font-semibold text-gray-700">
        <li><router-link to="/" class="hover:text-blue-600 transition">Domů</router-link></li>
        <li><router-link to="/formamnon" class="hover:text-blue-600 transition">Formamnon</router-link></li>
        <li><router-link to="/sanusdent" class="hover:text-blue-600 transition">Sanusdent</router-link></li>
        <li><router-link to="/contact" class="hover:text-blue-600 transition">Kontakt</router-link></li>
      </ul>
      
      <!-- Hamburger Menu Button for Mobile -->
      <button @click="toggleMenu" class="md:hidden text-gray-700 text-3xl focus:outline-none">
        ☰
      </button>
    </div>
    
    <!-- Mobile Navigation Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-white w-full shadow-md py-4 px-6">
      <ul class="flex flex-col space-y-4 text-lg font-semibold text-gray-700">
        <li><router-link to="/" class="hover:text-blue-600 transition" @click="toggleMenu">Domů</router-link></li>
        <li><router-link to="/formamnon" class="hover:text-blue-600 transition" @click="toggleMenu">Formamnon</router-link></li>
        <li><router-link to="/sanusdent" class="hover:text-blue-600 transition" @click="toggleMenu">Sanusdent</router-link></li>
        <li><router-link to="/contact" class="hover:text-blue-600 transition" @click="toggleMenu">Kontakt</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
  },
};
</script>

<style scoped>
nav {
  padding: 1rem 2rem;
}
@media (max-width: 768px) {
  .container {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .md\:hidden {
    order: 2;
  }
}
</style>