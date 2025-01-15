<script setup lang="ts">
import Button from "../common/Button.vue";
import logo from "@/assets/images/main-logo.png";

const year = new Date().getFullYear();
</script>

<template>
  <div
    class="flex flex-col min-h-[100px] w-full bg-[#0f0f0f] px-5 lg:px-20 pt-10"
  >
    <div
      class="flex flex-col lg:flex-row justify-center lg:justify-between items-center"
    >
      <div class="lg:w-[400px] mb-10 lg:mb-0">
        <div class="flex items-center">
          <img class="w-[50px]" :src="logo" />
          <div class="font-title text-[20px] font-[900] text-gray-200 ml-5">
            CleverApps
          </div>
        </div>
        <div class="text-gray-200 mt-5">Where Clever apps are built!</div>
      </div>
      <div class="lg:self-end">
        <div
          class="font-title text-center lg:text-left text-white text-[20px] font-[600] mb-4"
        >
          Join our newsletter
        </div>
        <div class="flex flex-col sm:flex-row items-center">
          <PInputText class="p-2 min-w-[300px] mb-5 sm:mb-0" />
          <Button color="light" class="ml-2 h-[50px]">Join </Button>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col order-2 lg:order-1 text-center lg:flex-row justify-between font-text text-gray-200 text-[12px] py-3 border-t border-t-gray-600 mt-10"
    >
      <div>Created by CleverApps | All rights reserved © {{ year }}</div>
      <div class="text-white order-1 lg:order-2">
        <NuxtLink class="text-white" to="/popups/privacy"
          >Privacy Policy</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
:deep(.p-inputtext) {
  border-radius: 100px;
}
</style>
