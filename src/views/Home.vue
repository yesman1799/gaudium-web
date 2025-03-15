<template>
  <div class="flex flex-col items-center justify-center p-12 bg-gray-100 min-h-screen">
    <h1 class="text-5xl font-extrabold text-gray-800 animate-fade-in">Vítejte v Gaudium2022</h1>
    <p class="text-xl text-gray-600 mt-6 animate-slide-up text-center max-w-2xl">
      Inovativní kosmetické produkty pro zdraví pokožky a celkovou pohodu.
    </p>

    <section class="mt-12 w-full max-w-5xl">
      <AboutSection />
    </section>
    
    <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
      <router-link to="/formamnon" class="block px-8 py-4 bg-green-600 text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-green-700 transition">Formamnon</router-link>
      <router-link to="/sanusdent" class="block px-8 py-4 bg-blue-600 text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition">Sanusdent</router-link>
    </div>
  </div>
</template>

<script>
import AboutSection from '../components/AboutSection.vue';

export default {
  components: {
    AboutSection
  }
};
</script>

<style>
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-fade-in {
  animation: fade-in 1s ease-in-out;
}

@keyframes slide-up {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.animate-slide-up {
  animation: slide-up 1s ease-in-out;
}
</style>
