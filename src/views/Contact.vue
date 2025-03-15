<template>
  <div class="contact-view min-h-screen bg-gray-50 text-center px-6 pt-28 font-sans">
    <h1 class="text-5xl font-extrabold text-gray-900 mb-6 tracking-wide animate-fade-in">Kontaktujte nás</h1>
    <p class="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed animate-slide-up">
      Máte dotazy? Neváhejte nás kontaktovat nebo nás navštívit na naší adrese.
    </p>

    <div class="mt-12 max-w-4xl mx-auto px-8 py-10 bg-white rounded-xl shadow-xl animate-fade-in">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Naše adresa</h2>
      <p class="text-lg text-gray-700">Gaudium2022 s.r.o.</p>
      <p class="text-lg text-gray-700">Moskevská 14, Most 1 434 01, Česká republika</p>
      <p class="text-lg text-gray-700 mt-2">Email: info@gaudium2022.cz</p>
      <p class="text-lg text-gray-700">Telefon: +420 123 456 789</p>
    </div>

    <!-- Otevírací doba -->
    <div class="mt-12 max-w-4xl mx-auto px-8 py-10 bg-white rounded-xl shadow-xl animate-slide-up">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Otevírací doba</h2>
      <p class="text-lg text-gray-700">Pondělí - Pátek: 9:00 – 18:00</p>
      <p class="text-lg text-gray-700">Sobota - Neděle: Zavřeno</p>
    </div>

    <!-- OpenStreetMap Section -->
    <div class="mt-12 max-w-4xl mx-auto px-8 py-10 bg-white rounded-xl shadow-xl animate-slide-up">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Kde nás najdete</h2>
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
           <b>Telefon:</b> +420 123 456 789<br>
           <b>Email:</b> <a href='mailto:info@gaudium2022.cz'>info@gaudium2022.cz</a><br>
           <b>Otevírací doba:</b><br>
           Pondělí - Pátek: 9:00 – 18:00<br>
           Sobota - Neděle: Zavřeno`
        )
        .openPopup();
    }
  }
};
</script>

<style scoped>
#map {
  width: 100%;
  height: 400px;
}
</style>
