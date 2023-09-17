<script setup lang="ts">
defineProps<{ text: string }>();
</script>

<template>
  <div class="flex justify-center relative w-full">
    <div class="font-title font-[800] text-[40px] relative z-10">
      {{ text }}
    </div>
    <div
      class="absolute bottom-[-10%] mr-auto ml-auto z-[0] font-title font-[800] text-[70px] text-gray-200"
    >
      {{ text }}
    </div>
  </div>
</template>
