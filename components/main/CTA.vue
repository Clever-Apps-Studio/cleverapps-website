<script setup>
import Button from "../common/Button.vue";
import ContactModal from "./ContactModal.vue";

const showModal = ref(false);
</script>

<template>
  <div
    class="flex flex-col items-center justify-center bg-black h-[500px] p-10 md:p-20"
  >
    <div
      class="font-title font-[800] text-[30px] md:text-[70px] text-center text-white"
    >
      Ready to get <br />
      <span class="text-[#ffbd02]">Rolling</span>?
    </div>
    <div class="w-auto mt-10">
      <Button color="light" class="p-7 px-10" @click="showModal = true">
        Let's Talk</Button
      >
    </div>
    <ContactModal v-model="showModal" />
  </div>
</template>
