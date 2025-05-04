<template>
  <div class="min-h-screen flex flex-col">
    <!-- TODO: Mutace a jazyky EN a DEUTSH -->
    <NavBar />
    <main class="flex-1">
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
