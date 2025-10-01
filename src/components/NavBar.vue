<!-- src/components/NavBar.vue -->
<template>
  <!-- vždy transparentní -->
  <nav class="fixed inset-x-0 top-0 z-50 py-3 lg:py-4 bg-transparent">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="glass-effect rounded-2xl px-4 sm:px-6 py-3 sm:py-4">
        <div class="flex items-center justify-between">
          <!-- LOGO -->
          <RouterLink to="/" class="flex items-center gap-3 shrink-0" @click="close()">
            <!-- Dočasné „vybělení“ skrz filtr. Pokud máš skutečné bílé logo, viz script. -->
            <img :src="logoSrc" alt="Gaudium" class="h-12 w-auto md:h-16 [filter:brightness(10)_invert(0)] opacity-100" />
          </RouterLink>

          <!-- DESKTOP LINKS -->
          <div class="hidden md:flex items-center gap-8">
            <RouterLink to="/" class="nav-link">O nás</RouterLink>
            <RouterLink to="/produkty" class="nav-link">Produkty</RouterLink>
            <a href="#science" class="nav-link">Věda</a>
            <RouterLink to="/contact" class="nav-link">Kontakt</RouterLink>

            <RouterLink
              to="/produkty"
              class="hidden lg:inline-block bg-gradient-to-r from-forest-green to-mint-light text-white px-5 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
              Objednat
            </RouterLink>
          </div>

          <!-- MOBILE BUTTON -->
          <button
            class="md:hidden inline-flex items-center justify-center rounded-xl p-2 text-forest-green hover:bg-forest-green/5 focus:outline-none focus:ring-2 focus:ring-forest-green/30"
            aria-label="Menu"
            :aria-expanded="isOpen ? 'true' : 'false'"
            @click="toggle()">
            <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7h16M4 12h16M4 17h16"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- MOBILE OVERLAY + SHEET -->
    <transition name="fade">
      <div v-if="isOpen" class="fixed inset-0 z-40 bg-black/30" @click="close()"></div>
    </transition>

    <transition name="slide-down">
      <div
        v-if="isOpen"
        class="fixed inset-x-0 top-0 z-50 mt-[72px] px-4 sm:px-6"
      >
        <div class="glass-effect rounded-2xl px-5 py-4 mx-auto max-w-7xl">
          <div class="flex flex-col gap-3">
            <RouterLink to="/" class="mobile-link" @click="close()">O nás</RouterLink>
            <RouterLink to="/produkty" class="mobile-link" @click="close()">Produkty</RouterLink>
            <a href="#science" class="mobile-link" @click="close()">Věda</a>
            <RouterLink to="/contact" class="mobile-link" @click="close()">Kontakt</RouterLink>

            <RouterLink
              to="/produkty"
              class="mt-2 bg-gradient-to-r from-forest-green to-mint-light text-white px-5 py-3 rounded-xl font-semibold text-center"
              @click="close()">
              Objednat
            </RouterLink>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, watchEffect, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import logo from '@/assets/images/logo-gaudium.jpg'
// Pokud máš skutečnou bílou verzi loga, použij ji:
// import logoWhite from '@/assets/images/logo-gaudium-white.png'

const logoSrc = logo // nebo logoWhite
const isOpen = ref(false)
const router = useRouter()

const toggle = () => { isOpen.value = !isOpen.value }
const close  = () => { isOpen.value = false }

// zamknout scroll, když je menu otevřené
watchEffect(() => {
  if (isOpen.value) document.documentElement.classList.add('overflow-hidden')
  else document.documentElement.classList.remove('overflow-hidden')
})

// auto-close po navigaci na jinou route
let removeAfterEach
onMounted(() => {
  removeAfterEach = router.afterEach(() => close())
})
onBeforeUnmount(() => {
  if (removeAfterEach) removeAfterEach()
})
</script>

<style scoped>
.nav-link{
  @apply text-forest-green hover:text-mint-light font-medium transition-colors;
}
.mobile-link{
  @apply text-forest-green font-medium px-3 py-2 rounded-lg hover:bg-forest-green/5 transition-colors;
}
/* jednoduché přechody */
.fade-enter-active,.fade-leave-active{ transition: opacity .2s ease }
.fade-enter-from,.fade-leave-to{ opacity: 0 }
.slide-down-enter-active,.slide-down-leave-active{ transition: transform .25s ease, opacity .2s ease }
.slide-down-enter-from,.slide-down-leave-to{ transform: translateY(-8px); opacity: 0 }
</style>
