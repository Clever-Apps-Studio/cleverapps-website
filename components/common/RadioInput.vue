<script setup lang="ts">
const emit = defineEmits(["click"]);
withDefaults(
  defineProps<{
    label?: string;
    selected?: boolean;
    disabled?: boolean;
  }>(),
  {
    disabled: false,
  }
);
</script>

<template>
  <div
    @click="!disabled && emit('click')"
    :class="{
      'bg-gray-100 cursor-not-allowed': disabled,
      '!border-cleverGreen': selected,
    }"
    class="flex items-center cursor-pointer py-[10px] px-[16px] border rounded-[10px] border-gray-300"
  >
    <div
      class="border-gray-300 border-[2px] rounded-full h-[20px] w-[20px] mr-[6px] p-[3px]"
      :class="{
        '!border-cleverGreen': selected,
      }"
    >
      <div
        v-if="selected"
        class="bg-cleverGreen w-full h-full rounded-full"
      ></div>
    </div>
    <div class="font-text text-14 font-[500]">{{ label }}</div>
  </div>
</template>
