<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>

<template>
  <div
    class="flex justify-center items-center rounded-full border-2 border-orange-300 p-1"
  >
    <div
      class="flex justify-center items-center rounded-full bg-orange-200 p-1 px-3 w-full text-orange-600"
    >
      {{ label }}
    </div>
  </div>
</template>
