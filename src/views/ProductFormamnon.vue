<template>
  <div class="p-10 bg-white shadow-lg rounded-lg max-w-4xl mx-auto text-center">
    <h1 class="text-4xl font-bold text-green-600">Formamnon</h1>
    <p class="mt-3 text-gray-700 text-lg">Gel proti dermatomykózám s výjimečným složením.</p>
    <img src="/src/assets/images/formamnon.jpg" alt="Formamnon" class="mt-6 w-64 rounded-lg shadow-md mx-auto">
    <p class="mt-6 text-gray-600 text-lg">Obsahuje 7 přírodních složek, včetně Alaptidu.</p>

    <div class="mt-8">
      <h2 class="text-2xl font-semibold text-gray-800">Detailní informace</h2>
      <SlideViewer product="formamnon" />
    </div>
  </div>
</template>

<script>
import SlideViewer from '@/components/SlideViewer.vue';

export default {
  components: {
    SlideViewer
  }
};
</script>
