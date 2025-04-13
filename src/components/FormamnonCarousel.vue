<template>
  <div class="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl">
    <img :src="slides[current]" alt="Formamnon Slide" class="w-full object-cover transition duration-500" />

    <!-- Left arrow -->
    <button
      @click="prev"
      :disabled="current === 0"
      class="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md"
    >
      <ChevronLeft
        class="w-8 h-8"
        :class="current === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-[#232f61] hover:text-[#4d8f5c]'"
      />
    </button>

    <!-- Right arrow -->
    <button
      @click="next"
      :disabled="current === slides.length - 1"
      class="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md"
    >
      <ChevronRight
        class="w-8 h-8"
        :class="current === slides.length - 1 ? 'text-gray-400 cursor-not-allowed' : 'text-[#232f61] hover:text-[#4d8f5c]'"
      />
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

const slides = Array.from({ length: 10 }, (_, i) => `/assets/presentations/formamnon/slide_${i + 1}.jpg`)
const current = ref(0)

const next = () => {
  if (current.value < slides.length - 1) current.value++
}
const prev = () => {
  if (current.value > 0) current.value--
}
</script>

<style scoped>
button {
  transition: all 0.3s ease;
}
</style>
