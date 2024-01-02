<script setup lang="ts">
import { ref } from "vue";
import ContactModal from "./ContactModal.vue";

import RadioInput from "../common/RadioInput.vue";
import GIcons from "../common/GIcons.vue";
import Button from "../common/Button.vue";

interface IItem {
  name: string;
  amount: number;
  month: number;
  currency: string;
  features: string[];
}

const period = ref("monthly");
const showModal = ref(false);
const props = defineProps<{ item: IItem }>();
</script>

<template>
  <div
    class="w-full lg:max-w-[500px] min-h-[400px] border rounded-[10px] bg-gray-50"
  >
    <div class="p-5">
      <div class="flex flex-col items-center justify-center pt-5">
        <div class="font-title text-[20px] font-bold">
          Turn your dream into a reality
        </div>
        <div
          class="font-text text-gray-500 text-[13px] text-center mt-1 w-[80%]"
        >
          Let's help you bring your ideas to life.
        </div>
      </div>

      <div class="flex flex-col items-center mt-5">
        <div class="flex">
          <div class="text-[16px]">{{ item.currency }}</div>
          <div class="font-title text-[25px] font-bold self-end leading-3">
            {{ item.amount }}
          </div>
          <div class="self-end leading-3 ml-1 text-gray-500 text-[14px]">
            / hour
          </div>
        </div>
        <div class="leading-3 ml-1 text-gray-500 text-[14px] mt-4">
          ( billed monthly )
        </div>
      </div>
      <div class="mt-10">
        <!-- <div class="mt-10 font-text text-[16px] font-[600]">What you get</div> -->
        <div class="mt-5">
          <div class="mb-3 flex items-center" v-for="feature in item.features">
            <GIcons name="check_circle" />
            <div class="ml-2">{{ feature }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center border-t p-5">
      <Button class="!w-[130px] mt-6 sm:mt-0" @click="showModal = true">
        Let's Talk</Button
      >
      <ContactModal v-model="showModal" />
    </div>
  </div>
</template>
