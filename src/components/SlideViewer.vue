<template>
  <div class="slide-container flex flex-col items-center mt-12">
    <div class="overflow-hidden rounded-lg shadow-lg border border-gray-300">
      <img :src="slides[currentSlide]" alt="Slide" class="w-full max-w-3xl h-auto object-cover transition-transform duration-500 ease-in-out rounded-md" />
    </div>
    <div class="controls flex items-center gap-6 mt-4">
      <button @click="prevSlide" :disabled="currentSlide === 0" class="nav-button">
        ⬅️
      </button>
      <span class="page-indicator">Strana {{ currentSlide + 1 }} / {{ slides.length }}</span>
      <button @click="nextSlide" :disabled="currentSlide >= slides.length - 1" class="nav-button">
        ➡️
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: String, // "formamnon" or "sanusdent"
  },
  data() {
    return {
      slides: [],
      currentSlide: 0,
    };
  },
  mounted() {
    this.loadSlides();
  },
  methods: {
    loadSlides() {
      if (this.product === "formamnon") {
        this.slides = [
          "/assets/presentations/formamnon/slide_1.jpg",
          "/assets/presentations/formamnon/slide_2.jpg",
          "/assets/presentations/formamnon/slide_3.jpg",
          "/assets/presentations/formamnon/slide_4.jpg",
          "/assets/presentations/formamnon/slide_5.jpg",
          "/assets/presentations/formamnon/slide_6.jpg",
          "/assets/presentations/formamnon/slide_7.jpg",
          "/assets/presentations/formamnon/slide_8.jpg",
          "/assets/presentations/formamnon/slide_9.jpg",
          "/assets/presentations/formamnon/slide_10.jpg",
        ];
      } else if (this.product === "sanusdent") {
        this.slides = [
          "/assets/presentations/sanusdent/slide_1.jpg",
          "/assets/presentations/sanusdent/slide_2.jpg",
          "/assets/presentations/sanusdent/slide_3.jpg",
          "/assets/presentations/sanusdent/slide_4.jpg",
          "/assets/presentations/sanusdent/slide_5.jpg",
          "/assets/presentations/sanusdent/slide_6.jpg",
          "/assets/presentations/sanusdent/slide_7.jpg",
          "/assets/presentations/sanusdent/slide_8.jpg",
          "/assets/presentations/sanusdent/slide_9.jpg",
          "/assets/presentations/sanusdent/slide_10.jpg",
          "/assets/presentations/sanusdent/slide_11.jpg",
        ];
      }
    },
    nextSlide() {
      if (this.currentSlide < this.slides.length - 1) {
        this.currentSlide++;
      }
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      }
    },
  },
};
</script>

<style scoped>
.slide-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.nav-button:hover {
  background-color: #0056b3;
}

.nav-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.page-indicator {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}
</style>
