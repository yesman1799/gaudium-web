<template>
  <div class="slide-container">
    <img :src="slides[currentSlide]" alt="Slide" class="slide-image" />
    <div class="controls">
      <button @click="prevSlide" :disabled="currentSlide === 0" class="nav-button">⬅️</button>
      <span class="page-indicator">Strana {{ currentSlide + 1 }} / {{ slides.length }}</span>
      <button @click="nextSlide" :disabled="currentSlide >= slides.length - 1" class="nav-button">➡️</button>
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
          "/src/assets/presentations/formamnon/slide_1.jpg",
          "/src/assets/presentations/formamnon/slide_2.jpg",
          "/src/assets/presentations/formamnon/slide_3.jpg",
          "/src/assets/presentations/formamnon/slide_4.jpg",
          "/src/assets/presentations/formamnon/slide_5.jpg",
          "/src/assets/presentations/formamnon/slide_6.jpg",
          "/src/assets/presentations/formamnon/slide_7.jpg",
          "/src/assets/presentations/formamnon/slide_8.jpg",
          "/src/assets/presentations/formamnon/slide_9.jpg",
          "/src/assets/presentations/formamnon/slide_10.jpg",
        ];
      } else if (this.product === "sanusdent") {
        this.slides = [
          "/src/assets/presentations/sanusdent/slide_1.jpg",
          "/src/assets/presentations/sanusdent/slide_2.jpg",
          "/src/assets/presentations/sanusdent/slide_3.jpg",
          "/src/assets/presentations/sanusdent/slide_4.jpg",
          "/src/assets/presentations/sanusdent/slide_5.jpg",
          "/src/assets/presentations/sanusdent/slide_6.jpg",
          "/src/assets/presentations/sanusdent/slide_7.jpg",
          "/src/assets/presentations/sanusdent/slide_8.jpg",
          "/src/assets/presentations/sanusdent/slide_9.jpg",
          "/src/assets/presentations/sanusdent/slide_10.jpg",
          "/src/assets/presentations/sanusdent/slide_11.jpg",
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

<style>
.slide-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
.slide-image {
  width: 100%;
  max-width: 800px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}
.controls {
  display: flex;
  gap: 15px;
  margin-top: 10px;
  align-items: center;
}
.nav-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
}
.nav-button:disabled {
  background-color: #ccc;
}
.page-indicator {
  font-size: 16px;
  font-weight: bold;
}
</style>
