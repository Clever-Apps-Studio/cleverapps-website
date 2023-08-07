<script setup>
import Features from "@/components/sections/Features.vue";
import Options from "@/components/sections/Options.vue";
import Pricing from "@/components/sections/Pricing.vue";

definePageMeta({
  layout: "popups",
});

useHead({
  title: "CleverPopups - Realtime social proof that converts!",
  meta: [
    {
      name: "description",
      content:
        "Boost your sales with our dynamic and clever purchase popups. Captivate customers, offer exclusive deals, and harness the power of social proof for increased conversions. Elevate your revenue potential today!",
    },
    {
      property: "og:title",
      content: "CleverPopups - Realtime social proof that converts!",
    },
    {
      property: "og:description",
      content:
        "Boost your sales with our dynamic and clever purchase popups. Captivate customers, offer exclusive deals, and harness the power of social proof for increased conversions. Elevate your revenue potential today!",
    },
    {
      property: "og:image",
      content: "https://cleverapps.studio/og1.png",
    },
  ],
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
