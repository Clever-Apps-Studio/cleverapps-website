<script setup>
import Button from "@/components/common/Button.vue";

import hero1 from "@/assets/images/hero1.png";
import hero2 from "@/assets/images/hero2.png";
import hero3 from "@/assets/images/hero3.png";
import heroIcon1 from "@/assets/images/heroIcon1.png";
import heroIcon2 from "@/assets/images/heroIcon2.png";
import badge from "@/assets/images/shopifyBadgeWhite.png";
import popup from "@/assets/images/popup.png";
</script>

<template>
  <div
    class="grid grid-cols-2 justify-center items-center !pt-[140px] sm:p-20 bg-white"
  >
    <div class="text-cleverBlack mt-20">
      <div
        class="font-title font-[700] text-[35px] md:text-[50px] leading-none"
      >
        Build trust, create urgency and drive up sales
      </div>
      <div class="font-text mt-5 text-[16px] md:text-[20px] text-gray-500">
        Leveraging social proof is key to success in the competitive world of
        e-commerce.
      </div>
      <div>
        <div class="w-[150px] mt-10">
          <Button class="h-[50px]" type="normal" color="default" rounded
            >Try it</Button
          >
        </div>
      </div>

      <div class="flex items-center mt-32">
        <div class="font-title font-[600] text-[16px] text-gray-500 w-[200px]">
          Trusted by Shopify merchants
        </div>
        <div class="w-[250px] cursor-pointer">
          <img class="w-full" :src="badge" />
        </div>
      </div>
    </div>
    <div class="w-[80%] ml-auto">
      <div class="grid grid-cols-2 gap-8 items-end relative">
        <div class="w-full relative">
          <img class="w-full" :src="hero2" />
          <img
            class="absolute bottom-[-20px] left-[-30px] w-[70px]"
            :src="heroIcon1"
          />
        </div>
        <div class="w-full relative">
          <img class="w-full" :src="hero1" />
          <img
            class="absolute top-[-20px] left-[-30px] w-[70px]"
            :src="heroIcon2"
          />
        </div>
        <img class="absolute w-[400px] left-[20%] bottom-[20px]" :src="popup" />
      </div>
      <div class="flex items-center mt-7 relative">
        <img :src="hero3" />
        <div
          class="absolute left-[20px] text-white font-title font-[700] text-[30px]"
        >
          Use social proof to <br />boost sales
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
:deep(.p-button:focus) {
  box-shadow: none;
}
:deep(.p-inputtext:enabled:focus) {
  box-shadow: none;
}
</style>
