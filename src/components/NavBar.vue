// NavBar.vue
<template>
  <nav class="bg-white shadow-md fixed w-full top-0 left-0 z-50 py-4">
    <div class="container mx-auto flex justify-between items-center px-6">
      <router-link to="/" class="flex items-center">
        <img src="/src/assets/images/logo-gaudium.jpg" alt="Gaudium Logo" class="h-14" />
      </router-link>
      
      <!-- Navigation Links for Desktop -->
      <ul class="hidden md:flex space-x-6 text-lg font-semibold text-gray-700">
        <li><router-link to="/" class="hover:text-[#452671] transition">Domů</router-link></li>
        <li class="relative group">
          <button class="hover:text-[#452671] transition">Produkty</button>
          <ul class="absolute left-0 opacity-0 group-hover:opacity-100 group-hover:visible bg-white shadow-md mt-2 w-48 rounded-md transition-opacity duration-200 ease-in-out" @mouseover="keepDropdownOpen" @mouseleave="closeDropdown">
            <li><router-link to="/formamnon" class="block px-4 py-2 hover:bg-[#452671] hover:text-white">FORMAMNON</router-link></li>
            <li><router-link to="/sanusdent" class="block px-4 py-2 hover:bg-[#452671] hover:text-white">SANUSDENT</router-link></li>
          </ul>
        </li>
        <li><router-link to="/contact" class="hover:text-[#452671] transition">Kontakt</router-link></li>
      </ul>
      
      <!-- Hamburger Menu Button for Mobile -->
      <button @click="toggleMenu" class="md:hidden text-gray-700 text-3xl focus:outline-none">
        ☰
      </button>
    </div>
    
    <!-- Mobile Navigation Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-white w-full shadow-md py-4 px-6">
      <ul class="flex flex-col space-y-4 text-lg font-semibold text-gray-700">
        <li><router-link to="/" class="hover:text-[#452671] transition" @click="toggleMenu">Domů</router-link></li>
        <li><router-link to="/formamnon" class="hover:text-[#452671] transition" @click="toggleMenu">FORMAMNON</router-link></li>
        <li><router-link to="/sanusdent" class="hover:text-[#452671] transition" @click="toggleMenu">SANUSDENT</router-link></li>
        <li><router-link to="/contact" class="hover:text-[#452671] transition" @click="toggleMenu">Kontakt</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuOpen: false,
      dropdownOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    keepDropdownOpen() {
      this.dropdownOpen = true;
    },
    closeDropdown() {
      this.dropdownOpen = false;
    },
  },
};
</script>

<style scoped>
nav {
  padding: 1rem 2rem;
  font-family: 'Roboto', sans-serif;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.relative:hover ul {
  display: block;
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
