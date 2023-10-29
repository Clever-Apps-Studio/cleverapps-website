<script setup lang="ts">
interface IProps {
  title: string;
  desc: string;
}
const props = withDefaults(defineProps<IProps>(), {
  title: "",
  desc: "",
});
</script>

<template>
    <div class="flex flex-col justify-center items-center bg-gray-50 shadow-sm h-96 text-center">
      <slot>
        <div class="font-title font-bold text-3xl">{{ title }}</div>
        <div class="font-text txt-xl mt-2">{{ desc }}</div>
      </slot>
        
    </div>
</template>
