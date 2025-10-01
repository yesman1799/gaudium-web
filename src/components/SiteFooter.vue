<template>
  <footer class="bg-forest-dark text-white pt-16 pb-10">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-12 items-start">
        <!-- Brand -->
        <div class="text-center md:text-left">
          <div class="flex items-center justify-center md:justify-start gap-4 mb-6">
            <img :src="logo" alt="Gaudium" class="h-16 w-auto [filter:brightness(0)_invert(1)] opacity-95" />
            <!-- Nebo použij skutečnou bílou verzi:
            <img :src="logoWhite" alt="Gaudium" class="h-12 w-auto" />
            -->
          </div>
          <p class="text-white/80 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            Příroda a věda v harmonii. Objevte budoucnost přírodní kosmetiky s revolučním Alaptid komplexem.
          </p>

          <!-- Socials -->
          <div class="flex justify-center md:justify-start gap-3 mt-6">
            <a class="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center">f</a>
            <a class="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center">ig</a>
            <a class="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center">in</a>
          </div>
        </div>

        <!-- Links -->
        <div class="grid grid-cols-2 gap-8 text-center md:text-left">
          <div>
            <h4 class="text-lg font-semibold mb-4">Produkty</h4>
            <ul class="space-y-3 text-white/80">
              <li><RouterLink to="/produkty/formamnon" class="hover:text-mint-light transition-colors">Formamnon gel</RouterLink></li>
              <li><RouterLink to="/produkty/sanusdent" class="hover:text-mint-light transition-colors">Sanusdent pasta</RouterLink></li>
              <li><RouterLink to="/produkty/gloria" class="hover:text-mint-light transition-colors">Gloria</RouterLink></li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">Kontakt</h4>
            <ul class="space-y-3 text-white/80">
              <li><a href="mailto:info@gaudium.cz" class="hover:text-mint-light transition-colors">info@gaudium.cz</a></li>
              <li><a href="tel:+420123456789" class="hover:text-mint-light transition-colors">+420 123 456 789</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="border-t border-white/15 mt-12 pt-6 text-center text-white/60 text-sm">
        &copy; {{ new Date().getFullYear() }} Gaudium Natural Science. Všechna práva vyhrazena.
      </div>
    </div>
  </footer>
</template>

<script setup>
// aktuální logo „přebělíme“ filtrem
import logo from '@/assets/images/logo-gaudium.jpg'
// pokud máš skutečně bílé logo, radši použij tohle a nahoře změň <img>:
// import logoWhite from '@/assets/images/logo-gaudium-white.png'
</script>
