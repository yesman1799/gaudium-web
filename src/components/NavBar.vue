<template>
  <header class="bg-white shadow-md font-serif tracking-wide">
    <div class="max-w-screen-xl mx-auto px-6 py-2 flex justify-between items-center">
      <router-link to="/">
        <img src="@/assets/images/logo-gaudium.jpg" alt="Gaudium Logo" class="h-24 md:h-24 w-auto" />
      </router-link>
      <div class="md:hidden">
        <button @click="toggleMenu" class="text-green-800 focus:outline-none">
          <svg v-if="!menuOpen" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav class="hidden md:flex space-x-8 text-lg tracking-wide">
        <router-link to="/" class="nav-link">Domů</router-link>
        <router-link to="/formamnon" class="nav-link">Formamnon</router-link>
        <router-link to="/sanusdent" class="nav-link">Sanusdent</router-link>
        <router-link to="/contact" class="nav-link">Kontakt</router-link>
      </nav>
    </div>

    <!-- Mobile menu -->
    <transition name="fade">
      <nav v-if="menuOpen" class="md:hidden px-6 bg-white border-t border-gray-200 text-lg font-serif tracking-wide">
        <ul class="flex flex-col items-end text-right space-y-4 mt-4 pb-4">
          <li><router-link to="/" @click="closeMenu" class="nav-link">Domů</router-link></li>
          <li><router-link to="/formamnon" @click="closeMenu" class="nav-link">Formamnon</router-link></li>
          <li><router-link to="/sanusdent" @click="closeMenu" class="nav-link">Sanusdent</router-link></li>
          <li><router-link to="/contact" @click="closeMenu" class="nav-link">Kontakt</router-link></li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
const toggleMenu = () => menuOpen.value = !menuOpen.value
const closeMenu = () => menuOpen.value = false
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&display=swap');

.font-serif {
  font-family: 'Playfair Display', serif;
}

.text-primary {
  @apply text-green-800;
}

.nav-link {
  @apply font-semibold transition-all duration-300;
  color: #1f3f2b;
}

.nav-link:hover {
  color: #4d8f5c;
  filter: brightness(1.2);
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
