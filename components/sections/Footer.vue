<script setup lang="ts">
import Button from "../common/Button.vue";
import logo from "@/assets/images/logo.png";
</script>

<template>
  <div class="flex flex-col min-h-[100px] w-full bg-black px-20 pt-10">
    <div class="flex justify-between items-center">
      <div class="w-[400px]">
        <div class="flex items-center">
          <img class="w-[100px]" :src="logo" />
          <div class="font-title text-[20px] font-[900] text-gray-200">
            CleverPopups
          </div>
        </div>
        <div class="text-gray-200 mt-5">
          Real-time social proof that converts! 🚀📈
        </div>
      </div>
      <div class="self-end">
        <div class="font-title text-white text-[20px] font-[600] mb-2">
          Join our newsletter
        </div>
        <div class="flex items-center">
          <PInputText class="p-2 min-w-[300px]" />
          <Button color="light" class="ml-2 h-[50px]">Join </Button>
        </div>
      </div>
    </div>
    <div
      class="flex justify-between font-text text-gray-200 text-[12px] p-3 border-t border-t-gray-600 mt-10"
    >
      <div>Created by CleverApps | All rights reserved © 2023</div>
      <div class="text-white">
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
