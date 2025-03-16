/* Updated Contact.vue for responsiveness */
<template>
  <div class="contact-view min-h-screen bg-gray-50 text-center px-4 sm:px-6 md:px-12 pt-40 font-sans animate-fade-in">
    <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-wide animate-slide-left">Kontaktujte nás</h1>
    <p class="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed animate-fade-in">
      Máte dotazy? Neváhejte nás kontaktovat.
    </p>

    <div class="mt-12 max-w-4xl mx-auto px-4 sm:px-8 py-10 bg-white rounded-xl shadow-xl animate-fade-in">
      <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Naše adresa</h2>
      <p class="text-lg sm:text-xl text-gray-700">Gaudium2022 s.r.o.</p>
      <p class="text-lg sm:text-xl text-gray-700">Moskevská 14, Most 1 434 01, Česká republika</p>
      <p class="text-lg sm:text-xl text-gray-700 mt-2">Email: info@gaudium2022.cz</p>
      <p class="text-lg sm:text-xl text-gray-700">Telefon: +420 123 456 789</p>
      <p class="text-lg sm:text-xl text-gray-700">Mobil: +420 776 251 226</p>
    </div>

    <!-- Otevírací doba -->
    <div class="mt-12 max-w-4xl mx-auto px-4 sm:px-8 py-10 bg-white rounded-xl shadow-xl animate-slide-up">
      <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Otevírací doba</h2>
      <p class="text-lg sm:text-xl text-gray-700">Pondělí - Pátek: 9:00 – 18:00</p>
      <p class="text-lg sm:text-xl text-gray-700">Sobota - Neděle: Zavřeno</p>
    </div>

    <!-- Map -->
    <div class="mt-12 max-w-4xl mx-auto px-4 sm:px-8 py-10 bg-white rounded-xl shadow-xl animate-slide-up">
      <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Kde nás najdete</h2>
      <div id="map" class="w-full h-96 rounded-lg shadow-md"></div>
    </div>
  </div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const map = L.map('map').setView([50.5062383, 13.6429433], 14);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      
      L.marker([50.5062383, 13.6429433]).addTo(map)
        .bindPopup(
          `<b>Gaudium2022 s.r.o.</b><br>
           Moskevská 14, Most 1 434 01<br>
           <b>Telefon:</b> +420 777 857 773 nebo +420 776 251 226<br>
           <b>Email:</b> <a href='mailto:info@gaudium2022.cz'>info@gaudium2022.cz</a><br>
           `
        )
        .openPopup();
    }
  }
};
</script>

<style scoped>
@keyframes slideLeft {
  from { transform: translateX(-30px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
.animate-slide-left { animation: slideLeft 1.5s ease-in-out; }

@media (max-width: 768px) {
  .contact-view {
    padding-top: 80px;
  }
  .max-w-4xl {
    max-width: 100%;
  }
  .px-8 {
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>