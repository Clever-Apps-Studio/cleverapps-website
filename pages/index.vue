<script setup lang="ts">
import Hero from "../components/main/Hero.vue";
import PitchVue from "../components/main/Pitch.vue";
import Process from "../components/main/Process.vue";
import Why from "../components/main/Why.vue";
import CTA from "../components/main/CTA.vue";
import Footer from "../components/main/Footer.vue";
</script>

<template>
  <div class="">
    <Hero />
    <div>
      <PitchVue />
    </div>

    <div class="mt-16">
      <Process />
    </div>
    <div class="mt-16">
      <Why />
    </div>
    <div>
      <CTA />
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>
