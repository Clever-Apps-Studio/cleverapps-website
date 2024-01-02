<script setup lang="ts">
import Hero from "../components/main/Hero.vue";
import PitchVue from "../components/main/Pitch.vue";
import Process from "../components/main/Process.vue";
import Why from "../components/main/Why.vue";
import CTA from "../components/main/CTA.vue";
import Footer from "../components/main/Footer.vue";
import Tech from "../components/main/Tech.vue";
import Pricing from "../components/main/Pricing.vue";
import Nav from "../components/main/Nav.vue";
import Services from "~/components/main/Services.vue";
import "animate.css";
</script>

<template>
  <div class="">
    <Nav />
    <Hero />
    <div>
      <PitchVue />
    </div>

    <div id="howItWorks" class="mt-16">
      <Process />
    </div>
    <div id="services">
      <Services />
    </div>
    <div id="techStack">
      <Tech />
    </div>
    <div class="">
      <Why />
    </div>
    <div id="price">
      <Pricing />
    </div>
    <div>
      <CTA />
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>
