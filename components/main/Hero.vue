<script setup>
import Button from "../common/Button.vue";
import ContactModal from "./ContactModal.vue";

useHead({
  script: [
    {
      src: "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js",
      // valid options are: 'head' | 'bodyClose' | 'bodyOpen'
      tagPosition: "head",
    },
  ],
});

onMounted(() => {
  particlesJS.load("particles-js", "/particles.json", function () {
    console.log("callback - particles.js config loaded");
  });
});

const showModal = ref(false);
</script>

<template>
  <div
    id="particles-js"
    class="flex items-center justify-center text-center h-[550px] bg-[#0f0f0f]"
  >
    <div
      class="absolute mr-auto ml-auto right-0 left-0 h-auto bg-transparent flex flex-col items-center justify-center text-white"
    >
      <div
        class="font-title font-[700] text-[20px] md:text-[50px] animate__animated animate__fadeInDown"
      >
        Where
        <span class="text-[#ffbd02]">CLEVER apps</span> are built
      </div>

      <div
        class="font-title font-[700] text-[16px] md:text-[20px] animate__animated animate__fadeInDown"
      >
        We build apps for SaaS startups and Co-operations
      </div>
      <div
        class="flex flex-col md:flex-row gap-5 justify-center items-center mt-10"
      >
        <div class="animate__animated animate__fadeInBottomLeft">
          <Button
            class="!px-10 py-7"
            type="normal"
            color="light"
            @click="showModal = true"
          >
            <div class="text-[20px] !font-text font-[500]">
              Let's talk
            </div></Button
          >
        </div>

        <div class="animate__animated animate__fadeInBottomRight">
          <a href="#howItWorks">
            <Button
              class="!px-8 py-7 text-[20px]"
              type="outline"
              color="success"
            >
              <div class="text-[20px] !font-text font-[500]">
                How it works
              </div></Button
            >
          </a>
        </div>
      </div>
    </div>
    <ContactModal v-model="showModal" />
  </div>
</template>
