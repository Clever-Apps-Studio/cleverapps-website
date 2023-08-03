<script setup lang="ts">
import logo from "@/assets/images/logo.png";
</script>

<template>
  <div class="flex flex-col min-h-[500px] w-full bg-black px-20 pt-20">
    <div>
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
    </div>
    <div
      class="font-text text-gray-200 mt-auto text-[12px] p-3 border-t border-t-gray-600"
    >
      Created by CleverApps | All rights reserved © 2023
    </div>
  </div>
</template>
