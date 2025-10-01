<template>
  <div class="bg-cream-white font-sans">
    <NavBar />
    <router-view />
    <SiteFooter />
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import NavBar from './components/NavBar.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>