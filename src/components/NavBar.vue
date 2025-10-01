<template>
  <nav class="fixed z-50 w-full py-4 transition-all duration-300"
       :class="scrolled ? 'bg-cream-white/95' : 'bg-transparent'">
    <div class="max-w-7xl mx-auto px-6">
      <div class="glass-effect rounded-2xl px-8 py-4">
        <div class="flex items-center justify-between">
          <!-- LOGO -->
          <RouterLink to="/" class="flex items-center space-x-4">
            <img :src="logo" alt="Gaudium" class="h-16 w-auto md:h-16 rounded-xl" />
          </RouterLink>

          <!-- Links -->
          <div class="hidden md:flex space-x-8">
            <RouterLink to="/" class="text-forest-green hover:text-mint-light font-medium">O nás</RouterLink>
            <RouterLink to="/produkty" class="text-forest-green hover:text-mint-light font-medium">Produkty</RouterLink>
            <a href="#science" class="text-forest-green hover:text-mint-light font-medium">Věda</a>
            <RouterLink to="/contact" class="text-forest-green hover:text-mint-light font-medium">Kontakt</RouterLink>
          </div>

          <RouterLink
            to="/produkty"
            class="bg-gradient-to-r from-forest-green to-mint-light text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
            Objednat
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import logo from '@/assets/images/logo-gaudium.jpg' // <- tady je tvoje cesta

const scrolled = ref(false)
const onScroll = () => { scrolled.value = window.scrollY > 100 }
onMounted(()=> window.addEventListener('scroll', onScroll))
onBeforeUnmount(()=> window.removeEventListener('scroll', onScroll))
</script>
