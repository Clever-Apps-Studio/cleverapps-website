<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
    },
  subtitle: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="flex items-center justify-center h-[500px] bg-[#0f0f0f]">
    <div class="flex flex-col items-center justify-center text-white">
      <p class="font-title text-[40px] font-bold">{{ title }}</p>
      <p>{{ subtitle }}</p>
    </div>
  </div>
</template>
