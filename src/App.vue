<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />
    <main class="flex-1 p-8">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    NavBar,
    Footer
  }
};
</script>
