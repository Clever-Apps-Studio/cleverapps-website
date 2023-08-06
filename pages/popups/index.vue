<script setup>
import Features from "@/components/sections/Features.vue";
import Options from "@/components/sections/Options.vue";
import Pricing from "@/components/sections/Pricing.vue";

definePageMeta({
  layout: "popups",
});
</script>

<template>
  <div class="bg-gray-50">
    <Hero />
    <Features />
    <Options />
    <Pricing />
  </div>
</template>
