<template>
  <footer id="contact" class="bg-forest-dark text-white py-20">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-4 gap-12">
        <div class="lg:col-span-2">
          <div class="flex items-center space-x-4 mb-8">
            <div class="w-16 h-16 bg-gradient-to-br from-mint-light to-forest-green rounded-2xl flex items-center justify-center">
              <span class="text-white font-bold text-2xl">G</span>
            </div>
            <div>
              <span class="text-3xl font-bold text-white">Gaudium</span>
              <p class="text-mint-light text-sm">Natural Science</p>
            </div>
          </div>
          <p class="text-white/80 text-lg mb-8 max-w-md leading-relaxed">
            Příroda a věda v harmonii. Objevte budoucnost přírodní kosmetiky s revolučním Alaptid komplexem.
          </p>
          <div class="flex space-x-4">
            <div class="w-12 h-12 bg-mint-light/20 rounded-xl flex items-center justify-center hover:bg-mint-light/30 cursor-pointer">f</div>
            <div class="w-12 h-12 bg-mint-light/20 rounded-xl flex items-center justify-center hover:bg-mint-light/30 cursor-pointer">ig</div>
            <div class="w-12 h-12 bg-mint-light/20 rounded-xl flex items-center justify-center hover:bg-mint-light/30 cursor-pointer">in</div>
          </div>
        </div>

        <div>
          <h4 class="text-xl font-bold mb-6">Produkty</h4>
          <ul class="space-y-4 text-white/80">
            <RouterLink to="/produkty/formamnon" class="hover:text-mint-light">Formamnon gel</RouterLink>
            <RouterLink to="/produkty/sanusdent" class="hover:text-mint-light">Sanusdent pasta</RouterLink>
            <RouterLink to="/produkty/gloria" class="hover:text-mint-light">Gloria</RouterLink>
          </ul>
        </div>

        <div>
          <h4 class="text-xl font-bold mb-6">Kontakt</h4>
          <ul class="space-y-4 text-white/80">
            <li><a class="hover:text-mint-light">info@gaudium.cz</a></li>
            <li><a class="hover:text-mint-light">+420 123 456 789</a></li>
            <li><a class="hover:text-mint-light">Vědecký tým</a></li>
            <li><a class="hover:text-mint-light">Kariéra</a></li>
          </ul>
        </div>
      </div>

      <div class="border-t border-white/20 mt-16 pt-8 text-center text-white/60">
        &copy; 2025 Gaudium Natural Science. Všechna práva vyhrazena.
      </div>
    </div>
  </footer>
</template>
