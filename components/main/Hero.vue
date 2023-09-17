<script setup>
import Button from "../common/Button.vue";

useHead({
  script: [
    {
      src: "http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js",
      // valid options are: 'head' | 'bodyClose' | 'bodyOpen'
      tagPosition: "head",
    },
  ],
});

onMounted(() => {
  particlesJS.load("particles-js", "assets/particles.json", function () {
    console.log("callback - particles.js config loaded");
  });
});
</script>

<template>
  <div
    id="particles-js"
    class="flex items-center justify-center h-[550px] bg-[#0f0f0f]"
  >
    <div
      class="absolute mr-auto ml-auto right-0 left-0 h-auto bg-transparent flex flex-col items-center justify-center text-white"
    >
      <div class="font-title font-[700] text-[50px]">
        Where
        <span class="text-[#ffbd02]">CLEVER apps</span> are built
      </div>

      <div class="font-title font-[700] text-[20px]">
        We build apps for SaaS startups and Co-operations
      </div>
      <div class="flex mt-10">
        <div class="mr-4">
          <Button class="!px-10 py-7" type="normal" color="light">
            <div class="text-[20px] !font-text font-[500]">
              Get Started
            </div></Button
          >
        </div>

        <div>
          <Button class="!px-8 py-7 text-[20px]" type="outline" color="success">
            <div class="text-[20px] !font-text font-[500]">
              How it works
            </div></Button
          >
        </div>
      </div>
    </div>
  </div>
</template>
