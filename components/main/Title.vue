<script setup lang="ts">
defineProps<{ text: string }>();
</script>

<template>
  <div class="flex justify-center text-center relative w-full">
    <div class="font-title font-[800] text-[30px] md:text-[40px] relative z-10">
      {{ text }}
    </div>
    <div
      class="absolute bottom-[10px] md:bottom-[-10%] mr-auto ml-auto z-[0] font-title font-[800] text-[35px] md:text-[70px] text-gray-200"
    >
      {{ text }}
    </div>
  </div>
</template>
