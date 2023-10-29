<script setup>
import Footer from "@/components/sections/Footer.vue";
</script>

<template>
  <div class="min-h-screen w-screen">
    <Nav />
    <slot />
    <Footer />
  </div>
</template>
